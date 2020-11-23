import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { AuthLayout, DashboardLayout } from '../layouts';
import { TransferModal, WalletDetailModal } from '../components';
import { routes } from '../routes';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [showSideBar, setShowSideBar] = useState(false);

  const [show, setShow] = useState(false);
  const showTransferModal = () => setShow(true);
  const hideTransferModal = () => setShow(false);

  const [showWallet, setShowWallet] = useState(false);
  const showWalletModal = () => setShowWallet(true);
  const hideWalletModal = () => setShowWallet(false);

  const router = useRouter();

  const authRoutes = [routes.entry.path, routes.register.path, routes.forgotPassword.path]

  useEffect(() => {
    setShowSideBar(false);
  }, [router]);

  return (
    <Provider store={store}>
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

      {authRoutes.includes(router.pathname) ? (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      ) : (
          <DashboardLayout
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            showTransferModal={showTransferModal}
            showWalletModal={showWalletModal}
          >
            <TransferModal
              show={show}
              handleClose={hideTransferModal}
            />

            <WalletDetailModal
              show={showWallet}
              handleClose={hideWalletModal}
            />

            <Component
              {...pageProps}
              showTransferModal={showTransferModal}
              showWalletModal={showWalletModal}
            />
          </DashboardLayout>
        )}
    </Provider>
  );
}

export default MyApp
