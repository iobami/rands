import Head from 'next/head';
import { useRouter } from 'next/router';
import { DashboardLayout } from '../layouts';
import { routesArray } from '../routes';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const routes = routesArray();

  return (
    <>
      <Head>
        <base href="../" />
        <meta charSet="utf-8" />
        <meta name="author" content="Bams" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="@@page-discription" />

        <link rel="shortcut icon" href="./images/favicon.png" />
        <title>My  Crypto | DashLite Admin Template</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="stylesheet" href="./assets/css/dashlite.css?ver=1.4.0" />
        <link id="skin-default" rel="stylesheet" href="./assets/css/theme.css?ver=1.4.0" />
        <link id="skin-default" rel="stylesheet" href="./assets/css/custom.css" />
      </Head>

      {routes.includes(router.pathname) && (
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      )}

      {!routes.includes(router.pathname) && (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp
