import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author_name: string;
  year: number;
}

export interface BookList {
  id: number;
  name: string;
  books: Book[]; 
}

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private apiUrl = 'http://127.0.0.1:8000/api/book-lists/';
  private booksApiUrl = 'http://127.0.0.1:8000/api/books/';

  bookLists = signal<BookList[]>([]);
  books = signal<Book[]>([]);  

  constructor(private http: HttpClient) {}

  getBookLists(): void {
    this.http.get<BookList[]>(this.apiUrl).subscribe(data => this.bookLists.set(data));
  }

  getBooks(): void {
    this.http.get<Book[]>(this.booksApiUrl).subscribe(
      data => {
        console.log("✅ API returned books:", data);  // ✅ Debug: Log API response
        this.books.set([...data]);  // ✅ Ensure Angular detects the change
      },
      error => console.error("❌ Error fetching books:", error)
    );
  }
  
  

  createBookList(name: string,  bookIds: number[]): Observable<BookList> {
    return this.http.post<BookList>(this.apiUrl, { name,  bookIds });
  }

  addBooksToList(listId: number, bookIds: number[]): Observable<Book[]> {
    return this.http.post<Book[]>(`${this.apiUrl}${listId}/add_books/`, { book_ids: bookIds });
  }
  

  removeBookFromList(listId: number, bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${listId}/remove_book/`, { body: { book_id: bookId } });
  }

  deleteBookList(listId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${listId}/`);
  }
  
  getBooksInList(listId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}${listId}/books/`);
  }
  
}
