import { Book } from "../book-list/book.interface";

export interface CartItem {
    book: Book;
    quantity: number;
}