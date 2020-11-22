import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { getItem, decryptKey } from '../../services';

export const getTransactionsAction = namespaceActions(namespaces.USER_TRANSACTIONS);
export const getRecentTransactionsAction = namespaceActions(namespaces.RECENT_USER_TRANSACTIONS);

export const reducer = handleActions(
  {
    [getTransactionsAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.getTransactionsItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [getTransactionsAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),

    [getRecentTransactionsAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.getRecentTransactionsItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [getRecentTransactionsAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    getTransactionsItem: null, isLoading: false,
    getRecentTransactionsItem: null
  },
);

function getTransactionsEpic(action$) {
  return action$.pipe(
    ofType(getTransactionsAction.loading),
    switchMap(() => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/usertransaction.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/usertransaction.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { user_email: user.user_name }
      }).pipe(
        map(({ response }) => getTransactionsAction.store(response)),
        catchError(error => {
          return of(getTransactionsAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

function getRecentTransactionsEpic(action$) {
  return action$.pipe(
    ofType(getRecentTransactionsAction.loading),
    switchMap(() => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/userminitransaction.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/userminitransaction.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { user_email: user.user_name }
      }).pipe(
        map(({ response }) => getRecentTransactionsAction.store(response)),
        catchError(error => {
          return of(getRecentTransactionsAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(getTransactionsEpic, getRecentTransactionsEpic);
