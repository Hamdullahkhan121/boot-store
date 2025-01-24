import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchQuery: string = '';

  @Output() search = new EventEmitter<string>();
  books: any[] = [];

  onSearch() {
    this.search.emit(this.searchQuery);
    this.search.emit(this.searchQuery.trim());
  }

}