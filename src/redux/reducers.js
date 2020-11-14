import { combineReducers } from 'redux';
import { reducer as services } from './entities/services';

export const rootReducer = combineReducers({
  services
});
