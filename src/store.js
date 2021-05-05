import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from './reducers/productReducer';
import { alertReducer } from './reducers/alertReducer';
import { productSettingsReducer } from './reducers/productSettingsReducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  product: productReducer,
  alert: alertReducer,
  productSettings: productSettingsReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

console.log(store.getState());

export default store;
