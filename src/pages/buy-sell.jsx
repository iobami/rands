import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Default() {

  return (
    <Fragment>
      <Head>
        <title>Buy / Sell | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="buysell wide-xs m-auto">
              <div className="buysell-nav text-center">
                <ul className="nk-nav nav nav-tabs nav-tabs-s2">
                  <li className="nav-item">
                    <a className="nav-link" href="html/crypto/buy-sell.html">Buy Coin</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sell Coin</a>
                  </li>
                </ul>
              </div>
              <div className="buysell-title text-center">
                <h2 className="title">What do you want to buy!</h2>
              </div>
              <div className="buysell-block">
                <form action="#" className="buysell-form">
                  <div className="buysell-field form-group">
                    <div className="form-label-group">
                      <label className="form-label">Choose what you want to get</label>
                    </div>
                    <input type="hidden" value="btc" name="bs-currency" id="buysell-choose-currency" />
                    <div className="dropdown buysell-cc-dropdown">
                      <a href="#" className="buysell-cc-choosen dropdown-indicator" data-toggle="dropdown">
                        <div className="coin-item coin-btc">
                          <div className="coin-icon">
                            <em className="icon ni ni-sign-btc-alt"></em>
                          </div>
                          <div className="coin-info">
                            <span className="coin-name">Bitcoin (BTC)</span>
                            <span className="coin-text">Last Order: Nov 23, 2019</span>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                        <ul className="buysell-cc-list">
                          <li className="buysell-cc-item selected">
                            <a href="#" className="buysell-cc-opt" data-currency="btc">
                              <div className="coin-item coin-btc">
                                <div className="coin-icon">
                                  <em className="icon ni ni-sign-btc-alt"></em>
                                </div>
                                <div className="coin-info">
                                  <span className="coin-name">Bitcoin (BTC)</span>
                                  <span className="coin-text">Last Order: Nov 23, 2019</span>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li className="buysell-cc-item">
                            <a href="#" className="buysell-cc-opt" data-currency="eth">
                              <div className="coin-item coin-eth">
                                <div className="coin-icon">
                                  <em className="icon ni ni-sign-eth-alt"></em>
                                </div>
                                <div className="coin-info">
                                  <span className="coin-name">Ethereum (ETH)</span>
                                  <span className="coin-text">Not order yet!</span>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="buysell-field form-group">
                    <div className="form-label-group">
                      <label className="form-label" for="buysell-amount">Amount to Buy</label>
                    </div>
                    <div className="form-control-group">
                      <input type="text" className="form-control form-control-lg form-control-number" id="buysell-amount" name="bs-amount" placeholder="0.055960" />
                      <div className="form-dropdown">
                        <div className="text">BTC<span>/</span></div>
                        <div className="dropdown">
                          <a href="#" className="dropdown-indicator-caret" data-toggle="dropdown" data-offset="0,2">USD</a>
                          <div className="dropdown-menu dropdown-menu-xxs dropdown-menu-right text-center">
                            <ul className="link-list-plain">
                              <li><a href="#">EUR</a></li>
                              <li><a href="#">CAD</a></li>
                              <li><a href="#">YEN</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-note-group">
                      <span className="buysell-min form-note-alt">Minimum: 10.00 USD</span>
                      <span className="buysell-rate form-note-alt">1 USD = 0.000016 BTC</span>
                    </div>
                  </div>
                  <div className="buysell-field form-group">
                    <div className="form-label-group">
                      <label className="form-label">Payment Method</label>
                    </div>
                    <div className="form-pm-group">
                      <ul className="buysell-pm-list">
                        <li className="buysell-pm-item">
                          <input className="buysell-pm-control" type="radio" name="bs-method" id="pm-paypal" />
                          <label className="buysell-pm-label" for="pm-paypal">
                            <span className="pm-name">PayPal</span>
                            <span className="pm-icon"><em className="icon ni ni-paypal-alt"></em></span>
                          </label>
                        </li>
                        <li className="buysell-pm-item">
                          <input className="buysell-pm-control" type="radio" name="bs-method" id="pm-bank" />
                          <label className="buysell-pm-label" for="pm-bank">
                            <span className="pm-name">Bank Transfer</span>
                            <span className="pm-icon"><em className="icon ni ni-building-fill"></em></span>
                          </label>
                        </li>
                        <li className="buysell-pm-item">
                          <input className="buysell-pm-control" type="radio" name="bs-method" id="pm-card" />
                          <label className="buysell-pm-label" for="pm-card">
                            <span className="pm-name">Credit / Debit Card</span>
                            <span className="pm-icon"><em className="icon ni ni-cc-alt-fill"></em></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="buysell-field form-action">
                    <a href="#" className="btn btn-lg btn-block btn-primary" data-toggle="modal" data-target="#buy-coin">Continue to Buy</a>
                  </div>
                  <div className="form-note text-base text-center">Note: our transfer fee included, <a href="#">see our fees</a>.</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
