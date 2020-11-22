import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { getItem, decryptKey } from '../../services';

export const rateAction = namespaceActions(namespaces.BTC_RATE);

export const reducer = handleActions(
  {
    [rateAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.rateItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [rateAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    rateItem: null, isLoading: false,
  },
);

function rateEpic(action$) {
  return action$.pipe(
    ofType(rateAction.loading),
    switchMap(() => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/rate.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/rate.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: user
      }).pipe(
        map(({ response }) => rateAction.store(response)),
        catchError(error => {
          return of(rateAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(rateEpic);
