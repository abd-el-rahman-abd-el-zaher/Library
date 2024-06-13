import { Component, OnInit } from '@angular/core';
import { IBook } from '../../models/IBook.interface';
import { BooksService } from '../../services/books.service';
import { IPagination } from '../../models/IPagination.interface';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];
  count: number = 0;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.booksService.getBooks(1).subscribe((res: IPagination<IBook>) => {
      this.count = res.count;
      this.books = res.list;
    });
  }
}
