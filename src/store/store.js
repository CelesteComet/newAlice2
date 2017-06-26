import { createStore, combineReducers } from 'redux';
import MenuReducer from '../reducers/menu_reducers';

const RootReducer = combineReducers({
  menu: MenuReducer
});

const Store = createStore(RootReducer);
export default Store;