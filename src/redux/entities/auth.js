import { handleActions } from 'redux-actions';
import { combineEpics, ofType } from 'redux-observable';
import { produce } from 'immer';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import namespaces, { namespaceActions } from '../namespaces';
import { setItem, getItem, encryptKey, decryptKey } from '../../services';

export const loginAction = namespaceActions(namespaces.LOGIN);
export const registerAction = namespaceActions(namespaces.REGISTER);
export const changePasswordAction = namespaceActions(namespaces.CHANGE_PASSWORD);
export const forgotPasswordAction = namespaceActions(namespaces.FORGOT_PASSWORD);

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

    [changePasswordAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.changePasswordItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [changePasswordAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),

    [forgotPasswordAction.store]: (state, action$) =>
      produce(state, (draft) => {
        draft.forgotPasswordItem = action$.payload;
        draft.isLoading = false;
        return draft;
      }),

    [forgotPasswordAction.loadingState]: (state, action$) =>
      produce(state, (draft) => {
        draft.isLoading = action$.payload;
        return draft;
      }),
  },
  {
    loginItem: null, isLoading: false,
    registerItem: null,
    changePasswordItem: null,
    forgotPasswordItem: null
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

function changePasswordEpic(action$) {
  return action$.pipe(
    ofType(changePasswordAction.loading),
    switchMap(({ payload }) => {
      const encNamespace = getItem(namespaces.USER_KEY);
      const user = decryptKey(encNamespace ? encNamespace.key : '');

      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/passwordchange.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/passwordchange.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          user_email: user.user_name,
          oldp: payload.oldPassword,
          newp: payload.newPassword
        }
      }).pipe(
        map(({ response }) => changePasswordAction.store(response)),
        catchError(error => {
          return of(changePasswordAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

function forgotPasswordEpic(action$) {
  return action$.pipe(
    ofType(forgotPasswordAction.loading),
    switchMap(({ payload }) => {
      const proxy = process.env.NEXT_PUBLIC_CORS_URL;
      return ajax({
        url: proxy ?
          `${proxy}${process.env.NEXT_PUBLIC_API_URL}/forgetpasswordapi.php` :
          `${process.env.NEXT_PUBLIC_API_URL}/forgetpasswordapi.php`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: payload
      }).pipe(
        map(({ response }) => forgotPasswordAction.store(response)),
        catchError(error => {
          return of(forgotPasswordAction.store(
            error.response ||
            { status: 'error', message: 'Service unavailable' }
          ));
        })
      );
    }),
  );
}

export const epic = combineEpics(loginEpic, registerEpic, changePasswordEpic, forgotPasswordEpic);
