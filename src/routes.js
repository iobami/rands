export const routes = {
  entry: {
    path: '/',
  },
  register: {
    path: '/register',
  },
  forgotPassword: {
    path: '/forgotpassword',
  },
  transactions: {
    path: '/transactions',
  },
  profile: {
    path: '/profile',
  },
  overview: {
    path: '/overview',
  },
  buySell: {
    path: '/buy-sell',
  },
  orders: {
    path: '/orders',
  },
  kycApplication: {
    path: '/kyc/application',
  },
  settings: {
    path: '/settings',
  },
};

export const routesArray = () => {
  const paths = [];

  for ( const [, { path }] of Object.entries(routes)) {
    paths.push(path);
  }

  return paths;
};
