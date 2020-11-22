import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserAction } from '../redux/entities/user';
import { rateAction } from '../redux/entities/services';

import { Header, Footer, Sidebar } from '../partials';

export default function DashboardLayout(props) {
  const { children, showSideBar, setShowSideBar, showTransferModal } = props;

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getUserAction.loading());
    dispatch(rateAction.loading());
  }, [router.pathname]);

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <Sidebar
          show={showSideBar}
          onHide={() => setShowSideBar(false)}
          showTransferModal={showTransferModal}
        />

        <div className="nk-wrap">
          <Header onShow={() => setShowSideBar(true)} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
