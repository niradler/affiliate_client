import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Observable} from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({selector: 'app-products', templateUrl: './products.component.html', styleUrls: ['./products.component.css']})

export class ProductsComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService,private route: ActivatedRoute) {}
  product = {}
  asin: string;
  private sub: any;
  getProduct(asin) {
    this
      .productService
      .getProduct(asin)
      .subscribe(data => {
        this.product = data
      }, err => {console.error(err);this.notfound();}, () => console.log('done loading product'));
  }

  notfound() {
    this.router.navigate(['/not-found',]);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.asin = params['asin']; // (+) converts string 'id' to a number
      if (this.asin) {
        this.getProduct(this.asin);
      }else{
        this.notfound();
      }

   });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
