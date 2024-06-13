import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/IBook.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    
    this.books = this.booksService.books;

  }
}
