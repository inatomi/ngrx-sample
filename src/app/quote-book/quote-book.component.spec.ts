import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBookComponent } from './quote-book.component';

describe('QuoteBookComponent', () => {
  let component: QuoteBookComponent;
  let fixture: ComponentFixture<QuoteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
