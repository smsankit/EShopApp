import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';

  constructor() {}

  getCart(): any[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  addToCart(product: any): void {
    let cart = this.getCart();
    let existingProduct = cart.find((p) => p.title === product.title);

    if (existingProduct) {
      existingProduct.noOfItems += 1;
    } else {
      product.noOfItems = 1;
      cart.push(product);
    }

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeFromCart(product: any): void {
    let cart = this.getCart().filter((p) => p.title !== product.title);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
