import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';

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
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
   
    this.getUserInfo();
    this.getProductList();
  }

  getUserInfo(){
    
    // API Call to Get User Info 
    this.dashboardService.userInfo()
    .subscribe((data) => {
        this.firstName = data.user.firstName;
        this.email = data.user.email;
        this.apikey = data.user.apikey;
    })

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

    // TODO : API Call Update JSON in DB 
    this.productList.push(this.newProduct);

    // This in only for testing 
    this.newProduct = {};
    setTimeout(() => {
      this.newProduct = { product: "Product " + ( this.productList.length + 1 ), desc: "PQR DESC"};
    },2000)

  }

  selectProdcut(item) {
    
    // TODO : Getting Product ID, Make API Call Get Product Info 
    this.selectedProduct = item;
  }

  apiKeyRegenaration(){

    // TODO : API Call for New API Key 
    this.apikey = "e77dc5a8-53ce-424f-8292-538f98bc22c6"

  }

}
