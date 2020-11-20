import React from 'react';

export default function AuthLayout({ children }) {

  return (
    <div className="nk-app-root">
      <div className="nk-main">
        <div className="row p-0 m-0 pt-5">
          <div className="col-sm-6 mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
