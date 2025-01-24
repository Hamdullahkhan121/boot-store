import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from  '../cart/cart.service'; 
import {Book} from './book.interface'
import { SearchBarComponent } from "../search-bar/search-bar.component";


@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: Book[] = [];
  constructor(private cartService: CartService) {}
  // filteredProducts = [...this.products]

  ngOnInit(): void {
    // Sample book data (replace with your actual data fetching)
    this.books = [
      { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 19.99, imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_edition_of_The_Fellowship_of_the_Ring.jpg', description: 'One of the greatest fantasy epics of all time' },
      { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', price: 9.99, description: 'A classic novel of manners and social satire.' },
      { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.50, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg' },
      { id: 4, title: '1984', author: 'George Orwell', price: 11.00},
    ];
  }
  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  onSearch(query: string) {
    this.books = this.books.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
}}
