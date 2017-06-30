import { ActionReducer, Action } from '@ngrx/store';
import * as QuoteActions from './quote-actions';


const quotes = (state :QuoteActions.Quote = null, action:Action) => {
  switch (action.type) {
    case QuoteActions.ADD_QUOTE: 
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export const rootReducer = {  };