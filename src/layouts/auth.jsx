import React from 'react';

export default function AuthLayout({ children }) {

  return (
    <div className="nk-app-root">
      <div className="nk-main nk-sub-main-auth">
        <div className="row p-0 m-0 d-block w-100">
          <div className="col-md-8 col-lg-6 mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
