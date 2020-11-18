export const routes = {
  entry: {
    path: '/',
  },
  accounts: {
    path: '/accounts',
  },
  profile: {
    path: '/profile',
  },
  wallets: {
    path: '/wallets',
  },
  buySell: {
    path: '/buy-sell',
  },
  orders: {
    path: '/orders',
  },
  kycApplication: {
    path: '/kyc/application',
  }
};

export const routesArray = () => {
  const paths = [];

  for ( const [, { path }] of Object.entries(routes)) {
    paths.push(path);
  }

  return paths;
};
