import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Default() {

  return (
    <Fragment>
      <Head>
        <title>Orders History  Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-between-md g-4">
                <div className="nk-block-head-content">
                  <h2 className="nk-block-title fw-normal">Your Orders</h2>
                  <div className="nk-block-des">
                    <p>See full list of your orders of your account</p>
                  </div>
                </div>
                <div className="nk-block-head-content">
                  <ul className="nk-block-tools gx-3">
                    <li className="order-md-last"><a href="#" className="btn btn-primary"><span>Buy Coin</span> <em className="icon ni ni-arrow-long-right"></em></a></li>
                    <li><a href="#" className="btn btn-white btn-light"><em className="icon ni ni-download-cloud"></em><span><span className="d-none d-sm-inline-block">Get</span> Statement</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <ul className="nk-nav nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="html/crypto/order-history.html">History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sells</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Scheduled <span className="badge badge-primary">3</span></a>
              </li>
            </ul>
            <div className="nk-block nk-block-sm">
              <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h6 className="nk-block-title">All Orders</h6>
                  </div>
                  <ul className="nk-block-tools gx-3">
                    <li>
                      <div className="form-group">
                        <div className="custom-control custom-control-xs custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="checkbox" />
                          <label className="custom-control-label" for="checkbox"><span className="d-none d-sm-inline-block">Show</span> Cancelled</label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="search-toggle toggle-search btn btn-icon btn-trigger" data-target="search"><em className="icon ni ni-search"></em></a>
                    </li>
                    <li>
                      <div className="dropdown">
                        <a className="dropdown-toggle btn btn-icon btn-trigger mx-n2" data-toggle="dropdown" data-offset="-8,0"><em className="icon ni ni-setting"></em></a>
                        <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                          <ul className="link-check">
                            <li><span>Show</span></li>
                            <li className="active"><a href="#">10</a></li>
                            <li><a href="#">20</a></li>
                            <li><a href="#">50</a></li>
                          </ul>
                          <ul className="link-check">
                            <li><span>Order</span></li>
                            <li className="active"><a href="#">DESC</a></li>
                            <li><a href="#">ASC</a></li>
                          </ul>
                          <ul className="link-check">
                            <li><span>Density</span></li>
                            <li className="active"><a href="#">Regular</a></li>
                            <li><a href="#">Compact</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="search-wrap search-wrap-extend" data-search="search">
                  <div className="search-content">
                    <a href="#" className="search-back btn btn-icon toggle-search" data-target="search"><em className="icon ni ni-arrow-left"></em></a>
                    <input type="text" className="form-control form-control-sm border-transparent form-focus-none" placeholder="Quick search by user" />
                    <button className="search-submit btn btn-icon"><em className="icon ni ni-search"></em></button>
                  </div>
                </div>
              </div>
              <h6 className="lead-text text-soft">November, 2019</h6>
              <div className="tranx-list tranx-list-stretch card card-bordered">
                <div className="tranx-item">
                  <div className="tranx-col">
                    <div className="tranx-info">
                      <div className="tranx-badge">
                        <span className="tranx-icon">
                          <img src="./images/coins/btc.svg" alt="" />
                        </span>
                      </div>
                      <div className="tranx-data">
                        <div className="tranx-label">Buy Bitcoin</div>
                        <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="tranx-col">
                    <div className="tranx-amount">
                      <div className="number">0.5384 <span className="currency currency-btc">BTC</span></div>
                      <div className="number-sm">3,980.93 <span className="currency currency-usd">USD</span></div>
                    </div>
                  </div>
                </div>
                <div className="tranx-item">
                  <div className="tranx-col">
                    <div className="tranx-info">
                      <div className="tranx-badge">
                        <span className="tranx-icon">
                          <img src="./images/coins/eth.svg" alt="" />
                        </span>
                      </div>
                      <div className="tranx-data">
                        <div className="tranx-label">Buy Bitcoin</div>
                        <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="tranx-col">
                    <div className="tranx-amount">
                      <div className="number">0.5384 <span className="currency currency-btc">BTC</span></div>
                      <div className="number-sm">3,980.93 <span className="currency currency-usd">USD</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="lead-text text-soft">October, 2019</h6>
              <div className="tranx-list tranx-list-stretch card card-bordered">
                <div className="tranx-item">
                  <div className="tranx-col">
                    <div className="tranx-info">
                      <div className="tranx-badge">
                        <span className="tranx-icon icon ni ni-sign-btc"></span>
                      </div>
                      <div className="tranx-data">
                        <div className="tranx-label">Buy Bitcoin</div>
                        <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="tranx-col">
                    <div className="tranx-amount">
                      <div className="number">0.5384 <span className="currency currency-btc">BTC</span></div>
                      <div className="number-sm">3,980.93 <span className="currency currency-usd">USD</span></div>
                    </div>
                  </div>
                </div>
                <div className="tranx-item">
                  <div className="tranx-col">
                    <div className="tranx-info">
                      <div className="tranx-badge">
                        <span className="tranx-icon icon ni ni-sign-eth"></span>
                      </div>
                      <div className="tranx-data">
                        <div className="tranx-label">Buy Bitcoin</div>
                        <div className="tranx-date">Nov 12, 2019 11:34 PM</div>
                      </div>
                    </div>
                  </div>
                  <div className="tranx-col">
                    <div className="tranx-amount">
                      <div className="number">0.5384 <span className="currency currency-btc">BTC</span></div>
                      <div className="number-sm">3,980.93 <span className="currency currency-usd">USD</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pt-4">
                <a href="#" className="link link-soft"><em className="icon ni ni-redo"></em><span>Load More</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
