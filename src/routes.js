export const routes = {
  entry: {
    path: '/',
  },
  accounts: {
    path: '/accounts',
  }
};

export const routesArray = () => {
  const paths = [];

  for ( const [, { path }] of Object.entries(routes)) {
    paths.push(path);
  }

  return paths;
};
