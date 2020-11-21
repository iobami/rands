import { createAction } from 'redux-actions';

export default {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  VERIFY_TOKEN: 'VERIFY_TOKEN',

  USER: 'USER',
  USER_KEY: 'USER-OIJORBJKSE-STORE',
};

export const namespaceActions = (namespace) => {
  const loading = createAction(`${namespace}_LOADING`);
  const store = createAction(`${namespace}_STORE_DATA`);
  const loadingState = createAction(`${namespace}_LOADING_STATE`);

  return {
    loading,
    store,
    loadingState,
  };
};
