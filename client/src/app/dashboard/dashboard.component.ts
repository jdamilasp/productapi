import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  firstName: string = "";
  email: string = "";
  apikey: string = "";

  productList: any = [];
  selectedProduct: any = {};
  newProduct: any = {};

  constructor(
   
  ) { }

  ngOnInit() {
   
    this.getUserInfo();
    this.getProductList();
  }

  getUserInfo(){
    
    // API Call to Get User Info 
    this.firstName = "ABC";
    this.email = "abc@gmail.com";
    this.apikey = "HDJD7GDDSJ8JKKJDD";

    // This only for Testing 
    setTimeout(() => {
      this.newProduct = { product : "Product 3", desc : "ABC PQR "}
    }, 2000);
  }

  getProductList(){

    // API Call to Get Product List 
    this.productList.push({ product: "Prodcut 1", desc: "PQR ABC " })
    this.productList.push({ product: "Prodcut 2", desc: "PQR ABC " })
    this.selectProdcut(this.productList[0]);
  }

  
  importJson(){

    // JSON Validation 

    // API Call Update JSON in DB 
    this.productList.push(this.newProduct);

    // This in only for testing 
    let tmp = this.newProduct;
    this.newProduct = {};
    setTimeout(() => {
      this.newProduct = tmp;
    },2000)

  }

  selectProdcut(item) {
    
    // Getting Product ID, Make API Call Get Product Info 
    this.selectedProduct = item;
  }

  apiKeyRegenaration(){

    // API Call for New API Key 
    this.apikey = "JDJKDF9DKKL32JDF8DF"

  }

}
