import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiObj: any = {};

  constructor() { }

  ngOnInit() {

    this.apiObj = {
      "top-product" : "milk",
      "brand" : ["ABC","PQR"],
      "price" : 450,
      "desc" : "milk. A white liquid produced by the mammary glands of PQSTUVS",
      "other-product" : [
        {
          "product" : "egg", "price": 35, "unit": 1
        }
      ]
    }
  }

}
