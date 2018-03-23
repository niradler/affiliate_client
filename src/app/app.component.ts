import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) {}
  asin: string = 'Asin';
  search(asin){
    this.goToProduct(asin)
  }
  goToProduct(asin) {
  this.router.navigate(['/products', asin]);
}
}
