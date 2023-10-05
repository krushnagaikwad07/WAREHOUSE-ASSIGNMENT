import { combineReducers } from 'redux';
import warehouseReducer from './warehouseReducer';

const rootReducer = combineReducers({
  warehouses: warehouseReducer
});

export default rootReducer;
