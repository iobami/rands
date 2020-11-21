import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { getItem, decryptKey } from '../../services';

export const getUserAction = namespaceActions(namespaces.USER);

export const reducer = handleActions(
  {
    [getUserAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.getUserItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [getUserAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    getUserItem: null, isLoading: false,
  },
);

function getUserEpic(action$) {
  return action$.pipe(
    ofType(getUserAction.loading),
    switchMap(() => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/getuser.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/getuser.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: user
      }).pipe(
        map(({ response }) => getUserAction.store(response)),
        catchError(error => {
          return of(getUserAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(getUserEpic);
