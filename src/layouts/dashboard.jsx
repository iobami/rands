import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getUserAction } from '../redux/entities/user';

import { Header, Footer, Sidebar } from '../partials';

export default function DashboardLayout({ children, showSideBar, setShowSideBar }) {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getUserAction.loading());
  }, [router.pathname]);

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <Sidebar show={showSideBar} onHide={() => setShowSideBar(false)} />

        <div className="nk-wrap">
          <Header onShow={() => setShowSideBar(true)} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
