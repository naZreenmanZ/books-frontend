import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSelectionDialogComponent } from './book-selection-dialog.component';

describe('BookSelectionDialogComponent', () => {
  let component: BookSelectionDialogComponent;
  let fixture: ComponentFixture<BookSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookSelectionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
