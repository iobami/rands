import { combineEpics } from 'redux-observable';

import { epic as servicesEpic } from './entities/services';
import { epic as authEpic } from './entities/auth';
import { epic as userEpic } from './entities/user';

export default combineEpics(
  servicesEpic,
  authEpic,
  userEpic
);
