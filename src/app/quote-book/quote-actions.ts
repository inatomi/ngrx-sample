//QuoteActions
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPD_QUOTE = 'UPD_QUOTE';

export interface Quote { 
  price:number;
}

export class QuoteActions{

  addQuote(quote:Quote){  
    return {
      type: ADD_QUOTE,
      Quote: quote
    };
  };

  updateQuote(quote:Quote){
    return {
      type: UPD_QUOTE,
      Quote: quote
    };
  }

}


