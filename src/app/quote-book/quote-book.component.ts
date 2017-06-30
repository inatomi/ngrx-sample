import {Store, Action, State} from '@ngrx/store';
import {combineReducers, ActionReducer} from '@ngrx/store';
import {StoreModule} from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import { Component, OnInit,Input } from '@angular/core';
import { Quote,QuoteActions } from './quote-actions';
import { QuoteService } from './quote-service';

@Component({
  selector: 'app-quote-book',
  templateUrl: './quote-book.component.html',
  styleUrls: ['./quote-book.component.css']
})
export class QuoteBookComponent implements OnInit {
  
  quote: Observable<Quote>;

  constructor(private store: Store<Quote>) { 
  }

  ngOnInit() {
    this.quote = this.store.select('test');
  }

}
