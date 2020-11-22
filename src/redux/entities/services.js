import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';

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
      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          'https://blockchain.info/ticker' :
          'https://blockchain.info/ticker',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
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
