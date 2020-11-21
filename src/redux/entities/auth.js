import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { setItem, encryptKey } from '../../services';

export const loginAction = namespaceActions(namespaces.LOGIN);
export const registerAction = namespaceActions(namespaces.REGISTER);

export const reducer = handleActions(
  {
    [loginAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.loginItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [loginAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),

    [registerAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.registerItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [registerAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    loginItem: null, isLoading: false,
    registerItem: null
  },
);

function loginEpic(action$) {
  return action$.pipe(
    ofType(loginAction.loading),
    switchMap(({ payload }) => {
      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/uservalidate.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/uservalidate.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload
      }).pipe(
        map(({ response }) => {
          const encNamespace = encryptKey(payload);
          setItem(namespaces.USER_KEY, { key: encNamespace });
          return loginAction.store(response);
        }),
        catchError(error => {
          return of(loginAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

function registerEpic(action$) {
  return action$.pipe(
    ofType(registerAction.loading),
    switchMap(({ payload }) => {
      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/userreg.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/userreg.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload
      }).pipe(
        map(({ response }) => registerAction.store(response)),
        catchError(error => {
          return of(registerAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(loginEpic, registerEpic);
