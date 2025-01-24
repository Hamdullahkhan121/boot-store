// cart.service.ts
import { Injectable, signal } from '@angular/core';
import { CartItem } from './cart-item.interface'; // Create this interface (see below)
import { Book } from '../book-list/book.interface'; // Create this interface (see below)

@Injectable({
  providedIn: 'root' // Makes the service available throughout the app
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addToCart(book: Book) {
      const existingItem = this.cartItems().find(item => item.book.id === book.id);
      if (existingItem) {
        this.updateQuantity(book.id, existingItem.quantity + 1)
      } else {
        this.cartItems.update(items => [...items, { book, quantity: 1 }]);
      }
  }

  updateQuantity(bookId: number, quantity: number) {
    this.cartItems.update(items =>
        items.map(item =>
          item.book.id === bookId ? { ...item, quantity } : item
        )
      );
  }

  removeFromCart(bookId: number) {
    this.cartItems.update(items => items.filter(item => item.book.id !== bookId));
  }

  clearCart() {
    this.cartItems.set([]);
  }

  getCartTotal(): number {
    return this.cartItems().reduce((total, item) => total + item.book.price * item.quantity, 0);
  }
 
  // onSearch(query: string) {
  //   //   this.filteredProducts = this.products.filter(product =>
  //   //     product.name.toLowerCase().includes(query.toLowerCase())
  //   //   );
}



 // filteredProducts = [...this.products];

  // onSearch(query: string) {
  //   this.filteredProducts = this.products.filter(product =>
  //     product.name.toLowerCase().includes(query.toLowerCase())
  //   );