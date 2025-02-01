/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule,MatIconModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  private apiUrl = 'http://127.0.0.1:8000/api/books/';
  books = signal<any[]>([]);


  constructor(private http: HttpClient) {
    this.loadBooks();
  }

  loadBooks() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => this.books.set(data));
  }
}
