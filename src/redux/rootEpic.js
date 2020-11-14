import { combineEpics } from 'redux-observable';

import { epic as servicesEpic } from './entities/services';

export default combineEpics(
  servicesEpic
);
