import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  selectedYear: "2023",
  selectedCountry: "USA" // Initial selected year
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_YEAR':
      return {
        ...state,
        selectedYear: action.payload,
      };
      
      case 'SET_SELECTED_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({
    reducer: reducer,
  });

export default store;