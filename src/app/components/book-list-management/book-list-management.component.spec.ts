import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListManagementComponent } from './book-list-management.component';

describe('BookListManagementComponent', () => {
  let component: BookListManagementComponent;
  let fixture: ComponentFixture<BookListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
