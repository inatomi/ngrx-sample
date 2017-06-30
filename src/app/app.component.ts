import { Component } from '@angular/core';
import {Store, Action, State} from '@ngrx/store';
import { Quote,QuoteActions } from './quote-book/quote-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price:number;

  constructor(private store: Store<Quote>){
  }

  subscribe(){
    this.store.select('test')
  }
}
