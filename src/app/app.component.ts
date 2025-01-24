import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { CartComponent } from "./cart/cart.component";
import { BookListComponent } from "./book-list/book-list.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule, CommonModule,
    FormsModule,
    NavbarComponent,
    CartComponent,
    BookListComponent,
    SearchBarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}
