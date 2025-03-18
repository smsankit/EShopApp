import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { SearchProductsService } from '../services/search-product.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
isLoggedIn:boolean=false;
  productDto = new Product();
  message: any = '';
  productlist: any = ''

  searchTerm: any = '';

  constructor(private productsService: ProductsService, private searchProductService: SearchProductsService, private authService:AuthenticationService) {
    if(authService.isLoggedIn()){
      this.isLoggedIn=true;
    }
    // else{
    //   this.isLoggedIn=true;
    //   this.authService.logout();
    // }
    this.products();
  }

  search() {
    console.log('Searching for:', this.searchTerm);
    this.searchProductService.searchProducts(this.searchTerm).subscribe(
      (data) => {
        console.log(data);
        this.message = data;
        this.productlist = data;
      }
      ,
      (error) => {
        this.message = 'Error during getting products';
        console.error('Error during getting products:', error);
      }
    )
  }

  products() {
    this.productsService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.message = data;
        this.productlist = data;
      }
      ,
      (error) => {
        this.message = 'Error during getting products';
        console.error('Error during getting products:', error);
      }
    );
  }

  truncateTheString(description: string, limit: number): string {
    if (description.length > limit) {
      return description.substring(0, limit) + '...';
    }
    return description;
  }

  showProductAlert(product: any) {
    console.log("Ankit");
    alert(`Product: ${product.title}\nPrice: ₹${product.price}\nCategory: ${product.category}`);
  }
}
