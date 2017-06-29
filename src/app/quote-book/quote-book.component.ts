import {Store, Action, State} from '@ngrx/store';
import {combineReducers, ActionReducer} from '@ngrx/store';
import {StoreModule} from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Quote } from './quote-actions';
import { QuoteService } from './quote-service';

@Component({
  selector: 'app-quote-book',
  templateUrl: './quote-book.component.html',
  styleUrls: ['./quote-book.component.css']
})
export class QuoteBookComponent implements OnInit {
  quote: Observable<Quote>;

  constructor(code:string) { 
    
  }

  ngOnInit() {
  }

}
