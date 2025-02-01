import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListManagementComponent } from './components/book-list-management/book-list-management.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-root',
  imports: [BookListComponent, BookListManagementComponent, MatToolbarModule,
    MatCardModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My Library';
}
