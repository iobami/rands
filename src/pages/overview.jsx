import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentTransactionsAction } from '../redux/entities/transactions';

import { TransactionsTable } from '../components';
import { routes } from '../routes';

export default function Overview({ showTransferModal }) {
  const dispatch = useDispatch();
  const { getUserItem } = useSelector((state) => state.user);
  const { getRecentTransactionsItem } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getRecentTransactionsAction.loading());
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Oveview - Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-head-sub"><span>Account Wallet</span> </div>
              <div className="nk-block-between-md g-4">
                <div className="nk-block-head-content">
                  {/* <h2 className="nk-block-title fw-normal">Wallet / Assets</h2> */}
                  <div className="nk-block-des">
                    <p>Here is the list of your assets / wallets!</p>
                  </div>
                </div>
                <div className="nk-block-head-content">
                  <ul className="nk-block-tools gx-3">
                    <li className="opt-menu-md dropdown">
                      <a className="btn btn-dim btn-outline-light btn-icon" data-toggle="dropdown">
                        <em className="icon ni ni-setting"></em>
                      </a>
                      <div className="dropdown-menu  dropdown-menu-xs dropdown-menu-right">
                        <ul className="link-list-plain sm">
                          {/* <li><a>Display</a></li> */}
                          <li><a href={routes.settings.path}>Show</a></li>
                        </ul>
                      </div>
                    </li>
                    <li onClick={showTransferModal}>
                      <a className="btn btn-primary text-white">
                        <span>Send</span>
                        <em className="icon ni ni-arrow-long-right"></em>
                      </a>
                    </li>
                    <li><a className="btn btn-dim btn-outline-light"><span>Withdraw</span> <em className="icon ni ni-arrow-long-right"></em></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nk-block">
              <div className="nk-block-head-sm">
                <div className="nk-block-head-content">
                  <h5 className="nk-block-title title">Crypto Accounts</h5>
                </div>
              </div>
              <div className="row g-gs">
                <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
                  <div className="card card-bordered is-dark">
                    <div className="nk-wgw">
                      <div className="nk-wgw-inner">
                        <a className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                            <em className="icon ni ni-sign-btc"></em>
                          </div>
                          <h5 className="nk-wgw-title title">Bitcoin Wallet</h5>
                        </a>
                        <div className="nk-wgw-balance">
                          <div className="amount">{getUserItem && getUserItem.user_btc}<span className="currency currency-btc">BTC</span></div>
                          <div className="amount-sm">{getUserItem && getUserItem.user_dollar}<span className="currency currency-usd">USD</span></div>
                        </div>
                      </div>
                      <div className="nk-wgw-actions">
                        <ul>
                          <li onClick={showTransferModal}>
                            <a className="btn">
                              <em className="icon ni ni-arrow-up-right"></em>
                              <span>Send</span>
                            </a>
                          </li>
                          <li>
                            <a className="btn">
                              <em className="icon ni ni-arrow-down-left"></em>
                              <span>Receive</span>
                            </a>
                          </li>
                          <li>
                            <a className="btn">
                              <em className="icon ni ni-arrow-to-right"></em>
                              <span>Withdraw</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {false && (
                        <div className="nk-wgw-more dropdown">
                          <a href="#" className="btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                          <div className="dropdown-menu dropdown-menu-xs dropdown-menu-right">
                            <ul className="link-list-plain sm">
                              <li><a href="#">Details</a></li>
                              <li><a href="#">Edit</a></li>
                              <li><a href="#">Delete</a></li>
                              <li><a href="#">Make Default</a></li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-block nk-block-lg">
              <TransactionsTable
                title="Transactions"
                description="Here is the list of your recent transactions"
                data={getRecentTransactionsItem && getRecentTransactionsItem.data || []}
                responseMessage="No record available"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
