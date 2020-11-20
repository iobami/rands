import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Transactions() {

  return (
    <Fragment>
      <Head>
        <title>Transactions - Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head pb-0">
              <div className="nk-block-head-sub"><span>Transactions</span> </div>
              <div className="nk-block-between-md g-4">
                <div className="nk-block-head-content">
                  <div className="nk-block-des">
                    <p>Here is the list of your transactions</p>
                  </div>
                </div>
                <div className="nk-block-head-content">
                </div>
              </div>
            </div>

            <hr/>

            <div className="nk-block">
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
