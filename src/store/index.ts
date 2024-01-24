import { createStore, combineReducers } from 'redux';
import userReducer from './reducers';

const rootReducer = combineReducers({
  user: userReducer
  // Add more reducers if needed
});

export const store = createStore(rootReducer);
