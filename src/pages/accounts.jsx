import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userDetailLoading, userDataLoader } from '../redux/entities/services';

export default function Accounts() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(userDataLoader(true));
    dispatch(userDetailLoading());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="nk-content nk-content-fluid">
      <div className="container-xl wide-lg">
        <div className="nk-content-body">
          <div className="nk-block-head">
            <div className="nk-block-head-sub"><span>Account Balance</span></div>
            <div className="nk-block-between-md g-4">
              <div className="nk-block-head-content">
                <h2 className="nk-block-title fw-normal">My Account</h2>
                <div className="nk-block-des">
                  <p>At a glance summary of your account. Have fun!</p>
                </div>
              </div>
              <div className="nk-block-head-content">
                <ul className="nk-block-tools gx-3">
                  <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-dim btn-outline-light"><em className="icon ni ni-arrow-from-right"></em></a><span className="btn-extext">Send</span></li>
                  <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-success"><em className="icon ni ni-wallet-in"></em></a><span className="btn-extext">Deposit</span></li>
                  <li className="btn-wrap"><a href="#" className="btn btn-icon btn-xl btn-warning"><em className="icon ni ni-wallet-out"></em></a><span className="btn-extext">Withdraw</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nk-block">
            <div className="card card-bordered">
              <div className="card-inner">
                <div className="nk-wg1 mb-3">
                  <div className="nk-wg1-group g-2">
                    <div className="nk-wg1-item mr-xl-4">
                      <div className="nk-wg1-title">Available Balance / <div className="dropdown">
                        <a className="dropdown-indicator-caret" data-offset="0,10" href="#" data-toggle="dropdown">USD</a>
                        <div className="dropdown-menu dropdown-menu-xxs dropdown-menu-center">
                          <ul className="link-list-plain sm text-center">
                            <li><a href="#">BTC</a></li>
                            <li><a href="#">ETH</a></li>
                            <li><a href="#">YEN</a></li>
                          </ul>
                        </div>
                      </div>
                      </div>
                      <div className="nk-wg1-amount">
                        <div className="amount">2.010550 <small className="currency currency-btc">BTC</small></div>
                      </div>
                    </div>
                    <div className="nk-wg1-item ml-lg-auto">
                      <div className="nk-wg1-title">In this month</div>
                      <div className="nk-wg1-group g-2">
                        <div className="nk-wg1-sub">
                          <div className="sub-text"><span>Send</span>
                            <div className="dot" data-bg="#9cabff"></div>
                          </div>
                          <div className="lead-text">762,954.63</div>
                        </div>
                        <div className="nk-wg1-sub">
                          <div className="sub-text"><span>Receive</span>
                            <div className="dot" data-bg="#baaeff"></div>
                          </div>
                          <div className="lead-text">762,954.63</div>
                        </div>
                        <div className="nk-wg1-sub">
                          <div className="sub-text"><span>Withdraw</span>
                            <div className="dot" data-bg="#a7ccff"></div>
                          </div>
                          <div className="lead-text">762,954.63</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nk-ck1">
                  <canvas className="chart-account-balance" id="mainBalance"></canvas>
                </div>
              </div>
            </div>
            <div className="card card-bordered">
              <div className="card-inner">
                <div className="card-head ui-v2">
                  <div className="card-title">
                    <h5 className="title">Balance Summary</h5>
                  </div>
                  <div className="card-tools">
                    <ul className="card-tools-nav">
                      <li><a href="#">This Month</a></li>
                      <li><a href="#">Months</a></li>
                      <li className="active"><a href="#">Years</a></li>
                    </ul>
                  </div>
                </div>
                <div className="nk-wg4">
                  <div className="nk-wg4-group flex-lg-nowrap justify-between g-3">
                    <div className="nk-wg4-item">
                      <div className="nk-wg4-group g-3">
                        <div className="nk-wg4-sub">
                          <div className="sub-text">
                            <div className="dot dot-lg sq" data-bg="#5ce0aa"></div> <span>Total Received</span>
                          </div>
                          <div className="lead-text-lg">2.010550 <span className="currency currency-btc">BTC</span></div>
                        </div>
                        <div className="nk-wg4-sub">
                          <div className="sub-text">
                            <div className="dot dot-lg sq" data-bg="#798bff"></div> <span>Total Send</span>
                          </div>
                          <div className="lead-text-lg">2.010550<span className="currency currency-btc">BTC</span></div>
                        </div>
                        <div className="nk-wg4-sub">
                          <div className="sub-text">
                            <div className="dot dot-lg sq" data-bg="#f6ca3e"></div><span>Total Withdraw</span>
                          </div>
                          <div className="lead-text-lg">2.010550<span className="currency currency-btc">BTC</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="nk-wg4-item text-lg-right">
                      <ul className="nk-wg4-switcher">
                        <li>
                          <div className="dropdown">
                            <a className="dropdown-indicator" href="#" data-toggle="dropdown">January</a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <ul className="link-list-plain li-col3x text-center">
                                <li><a href="#">Jan</a></li>
                                <li><a href="#">Feb</a></li>
                                <li><a href="#">Mar</a></li>
                                <li><a href="#">Apr</a></li>
                                <li><a href="#">May</a></li>
                                <li><a href="#">Jun</a></li>
                                <li><a href="#">Jul</a></li>
                                <li><a href="#">Aug</a></li>
                                <li><a href="#">Sep</a></li>
                                <li><a href="#">Oct</a></li>
                                <li><a href="#">Nov</a></li>
                                <li><a href="#">Dec</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="dropdown">
                            <a className="dropdown-indicator" href="#" data-toggle="dropdown">2019</a>
                            <div className="dropdown-menu dropdown-menu-auto">
                              <ul className="link-list-plain sm text-center">
                                <li><a href="#">2018</a></li>
                                <li><a href="#">2017</a></li>
                                <li><a href="#">2016</a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="nk-wg4-note">Total <span>35,405</span> transaction made</div>
                    </div>
                  </div>
                </div>
                <div className="nk-ck2">
                  <canvas className="chart-account-summary" id="summaryBalance"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
