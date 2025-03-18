import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
   product: any;

  constructor(private router: Router, public authService: AuthenticationService, private cartService: CartService) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state?.['productData'] || {};
  }

  addToCart(product: any) : void{
    if(this.authService.isLoggedIn()){
      this.cartService.addToCart(this.product);
      alert('Product added to cart!');
    }else{
      alert('Please login to add the product!');
    }
  }
}
