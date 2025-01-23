import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(public cartService: CartService){}

    submitOrder(){
        if(this.cartService.cartItems().length > 0){
            console.log("Order submitted!");
            this.cartService.clearCart();
            //Here you would normally call a backend service to process the order
        } else {
            console.log("Cart is empty!")
        }
    }
}


