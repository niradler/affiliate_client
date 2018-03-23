import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getProduct(asin) {
        return this.http.get(`https://amazon-affiliate-server.herokuapp.com/products/${asin}`);
    }

}
