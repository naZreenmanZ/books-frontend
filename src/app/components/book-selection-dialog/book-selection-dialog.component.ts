import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../services/book-list.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { JsonPipe,CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-selection-dialog',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, MatDialogModule, MatListModule, JsonPipe],
  templateUrl: './book-selection-dialog.component.html',
  styleUrls: ['./book-selection-dialog.component.scss']
})
export class BookSelectionDialogComponent implements OnInit {
  selectedBooks: number[] = [];
  books: Book[] = [];

  constructor(
    public dialogRef: MatDialogRef<BookSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { listId: number; books: Book[] }
  ) {}
  

  ngOnInit(): void {
    console.log("📌 Before Assigning: Books Data:", this.data.books);
  
    this.books = [...this.data.books]; // Force a fresh reference
  
    console.log("📌 After Assigning: Books:", this.books);
  }
  
  
  
  toggleSelection(bookId: number): void {
    const index = this.selectedBooks.indexOf(bookId);
    if (index > -1) {
      this.selectedBooks.splice(index, 1); 
    } else {
      this.selectedBooks.push(bookId); 
    }
  }

  confirmSelection(): void {
    this.dialogRef.close(this.selectedBooks);
  }
}
