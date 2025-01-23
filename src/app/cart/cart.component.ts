import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { CartItem } from '../cart/cart-item.interface';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(public cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.cartItems;
    this.cartTotal = this.cartService.getCartTotal;
  }
  // cartItems = this.cartService.cartItems
  cartItems : any;
  cartTotal: any;


  updateQuantity(item: CartItem) {
    this.cartService.updateQuantity(item.book.id, item.quantity);
  }

  removeFromCart(bookId: number) {
    this.cartService.removeFromCart(bookId);
  }


  // ... other methods

  checkout() {
    if(this.cartService.cartItems().length > 0){
        this.router.navigate(['/checkout']);
    } else {
        console.log("Cart is empty!")
    }
  }
}


