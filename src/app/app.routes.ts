import { Routes } from '@angular/router';
// import { BookListComponent } from './components/book-list/book-list.component';
import { BookListManagementComponent } from './components/book-list-management/book-list-management.component';
export const routes: Routes = [
    // { path: '', component: BookListComponent },
    { path: 'manage-lists', component: BookListManagementComponent } 
];
