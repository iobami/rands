import { createAction, handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError, finalize } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
// import { store } from '../../index';

export const userDetailLoading = createAction('FETCH_ALL_USERS_DETAIL_LOADING');
export const storeUserData = createAction('STORE_ALL_USERS_DETAIL');
export const userDataLoader = createAction('ALL_USERS_DATA_LOADER');

export const reducer = handleActions(
  {
    [storeUserData]: (state, action$) =>
      produce(state, (draft) => {
        draft.item = action$.payload;
        return draft;
      }),
    [userDataLoader]: (state, action$) =>
      produce(state, (draft) => {
        draft.loader = action$.payload;
        return draft;
      }),
  },
  { item: {}, loader: false },
);

function fetchAllUsersEpic(action$) {
  return action$.pipe(
    ofType(userDetailLoading),
    switchMap(() => {
      console.log('testing redux');
      const proxy = process.env.REACT_APP_API_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.REACT_APP_API_URL}/getAll.php` :
          `${process.env.REACT_APP_API_URL}/getAll.php`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        map(({ response }) => storeUserData(response)),
        catchError(error => {
          return of(storeUserData(error.response));
        }),
        finalize(() => {
          // store.dispatch(userDataLoader(false));
        })
      );
    }),
  );
}

export const epic = combineEpics(fetchAllUsersEpic);
