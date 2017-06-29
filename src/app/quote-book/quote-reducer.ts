import * as QuoteActions from './quote-actions';

const initialState = [];
const quotes = (state = initialState, action) => {
  switch (action.type) {
    case QuoteActions.ADD_QUOTE: 
      return state.concat({
          text: action.text,
        });
    default:
      return state;
  }
};

export const rootReducer = {  };