import React from 'react';
// import { useRouter } from 'next/router';

import { Header, Footer, Sidebar } from '../partials';

export default function DashboardLayout({ children }) {

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <Sidebar />

        <div className="nk-wrap">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
