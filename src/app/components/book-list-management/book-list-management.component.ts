import { Component, signal, OnInit } from '@angular/core';
import { BookListService, BookList, Book } from '../../services/book-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BookSelectionDialogComponent } from '../book-selection-dialog/book-selection-dialog.component';

@Component({
  selector: 'app-book-list-management',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatIcon,
    MatListModule, MatExpansionModule,
    MatDialogModule],
  templateUrl: './book-list-management.component.html',
  styleUrls: ['./book-list-management.component.scss'],
  
})
export class BookListManagementComponent implements OnInit {
  private _newListName = signal('');
  bookLists = signal<BookList[]>([]);
  books = signal<Book[]>([]);
  private _selectedListId = signal<number | null>(null);
  private _selectedBookId = signal<number | null>(null);
  selectedListBooks = signal<Book[]>([]);
  selectedBookIds: number[] = [];

  constructor(private bookListService: BookListService, public dialog: MatDialog) {
    this.bookLists = this.bookListService.bookLists;
    this.books = this.bookListService.books;
  }
  ngOnInit(): void {
    this.bookListService.getBookLists();
    this.bookListService.getBooks();

  }



  // ✅ Getter and Setter for `newListName`
  get newListName(): string {
    return this._newListName();
  }
  set newListName(value: string) {
    this._newListName.set(value);
  }

  // ✅ Getter and Setter for `selectedListId`
  get selectedListId(): number | null {
    return this._selectedListId();
  }
  set selectedListId(value: number | null) {
    this._selectedListId.set(value);
  }

  // ✅ Getter and Setter for `selectedBookId`
  get selectedBookId(): number | null {
    return this._selectedBookId();
  }
  set selectedBookId(value: number | null) {
    this._selectedBookId.set(value);
  }

  createList(): void {

    console.log("HREERE", this.newListName)
    if (this.newListName.trim() && this.selectedBookIds.length > 0) {
      console.log("🟢 Creating List:", this.newListName, "with Books:", this.selectedBookIds);

      this.bookListService.createBookList(this.newListName, this.selectedBookIds).subscribe(() => {
        this.newListName = '';
        this.selectedBookIds = [];
        this.bookListService.getBookLists();
      });
    }
  }

  deleteBookList(listId: number): void {
    this.bookListService.deleteBookList(listId).subscribe(() => {
      this.bookListService.getBookLists();  // Refresh after deletion
    });
  }

  onListSelected(): void {
    if (this.selectedListId) {
      this.bookListService.getBooksInList(this.selectedListId).subscribe(books => {
        this.selectedListBooks.set(books);
      });
    }
  }

  // addBooksToList(): void {
  //   if (this.selectedListId !== null && this.selectedBookId !== null) {
  //     this.bookListService.addBooksToList(this.selectedListId!, this.selectedBookId!).subscribe(() => {
  //       this.bookListService.getBooksInList(this.selectedListId!).subscribe(books => {
  //         this.selectedListBooks.set(books);
  //       });
  //     });
  //   }
  // }


  removeBookFromList(listID:number, bookId: number,): void {
    if (listID) {
      this.bookListService.removeBookFromList(listID, bookId,).subscribe(() => {
        this.bookListService.getBookLists();

       
      });
    }
  }


  openAddBookDialog(listId: number): void {
    console.log("📌 Opening Dialog for List ID:", listId, "Books Available:", this.books());

    const dialogRef = this.dialog.open(BookSelectionDialogComponent, {
      width: '400px',
      data: { listId, books: JSON.parse(JSON.stringify(this.books())) } // ✅ Ensures fresh data
    });

    dialogRef.afterClosed().subscribe(selectedBookIds => {
      if (selectedBookIds) {
        console.log("📌 Books Selected:", selectedBookIds);
        this.bookListService.addBooksToList(listId, selectedBookIds).subscribe((updatedBooks) => {
          console.log("📌 Updated Books in List:", updatedBooks);
          this.bookListService.getBookLists();  // ✅ Refresh the book lists
        });
      }
    });
  }



}
