import React from 'react';

import { Header, Footer, Sidebar } from '../partials';

export default function DashboardLayout({ children, showSideBar, setShowSideBar }) {

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
