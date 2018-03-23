import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-products', templateUrl: './products.component.html', styleUrls: ['./products.component.css']})
export class ProductsComponent implements OnInit {
   product = {
    "feature": [
    "Soft-skin upper body",
    "Moves head left, right, forward & back for reactions",
    "Articulated arms, original voice with sound effects",
    "Puts Teddy bear near his belly to activate special function"
    ],
    "images": [
    {
    "thumbnailImage": "https://images-na.ssl-images-amazon.com/images/I/41BtWAoXhUL._SL75_.jpg",
    "largeImage": "https://images-na.ssl-images-amazon.com/images/I/41BtWAoXhUL.jpg"
    },
    {
    "thumbnailImage": "https://images-na.ssl-images-amazon.com/images/I/419G2DoVX7L._SL75_.jpg",
    "largeImage": "https://images-na.ssl-images-amazon.com/images/I/419G2DoVX7L.jpg"
    },
    {
    "thumbnailImage": "https://images-na.ssl-images-amazon.com/images/I/41kGNV3YrNL._SL75_.jpg",
    "largeImage": "https://images-na.ssl-images-amazon.com/images/I/41kGNV3YrNL.jpg"
    },
    {
    "thumbnailImage": "https://images-na.ssl-images-amazon.com/images/I/41Qy1uUksPL._SL75_.jpg",
    "largeImage": "https://images-na.ssl-images-amazon.com/images/I/41Qy1uUksPL.jpg"
    },
    {
    "thumbnailImage": "https://images-na.ssl-images-amazon.com/images/I/51obGEqR7fL._SL75_.jpg",
    "largeImage": "https://images-na.ssl-images-amazon.com/images/I/51obGEqR7fL.jpg"
    }
    ],
    "_id": "5ab42208603d3a2dd8f19d61",
    "asin": "B00PDMJ7VS",
    "title": "Minions Bob Interacts with Teddy Bear",
    "price": "$31.98",
    "low_price": "$31.98",
    "content": "Minions Bob Interacts with Teddy Bear",
    "large_image": "https://images-na.ssl-images-amazon.com/images/I/51obGEqR7fL.jpg",
    "__v": 0
    }
  constructor() {}

  ngOnInit() {
    const product = {
      title: 'test'
    }
  }

}
