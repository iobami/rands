import { combineReducers } from 'redux';
import { reducer as services } from './entities/services';
import { reducer as auth } from './entities/auth';
import { reducer as user } from './entities/user';
import { reducer as transactions } from './entities/transactions';

export const rootReducer = combineReducers({
  services,
  auth,
  user,
  transactions
});
