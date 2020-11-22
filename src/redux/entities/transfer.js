import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { getItem, decryptKey } from '../../services';

export const transferAction = namespaceActions(namespaces.BTC_TRANSFER);

export const reducer = handleActions(
  {
    [transferAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.transferItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [transferAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    transferItem: null, isLoading: false,
  },
);

function transferEpic(action$) {
  return action$.pipe(
    ofType(transferAction.loading),
    switchMap(({ payload }) => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      delete payload.usdAmount;

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/transferapi.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/transferapi.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { email: user.user_name, ...payload }
      }).pipe(
        map(({ response }) => transferAction.store(response)),
        catchError(error => {
          return of(transferAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(transferEpic);
