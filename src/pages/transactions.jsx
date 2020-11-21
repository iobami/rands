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

            <hr />

            <div className="nk-block">
              <div className="col-xxl-8 pl-0 pr-0">
                <div className="card card-bordered card-full">
                  <div className="card-inner p-0 border-top">
                    <div className="nk-tb-list nk-tb-orders">
                      <div className="nk-tb-item nk-tb-head">
                        <div className="nk-tb-col"><span>Order No.</span></div>
                        <div className="nk-tb-col tb-col-sm"><span>Customer</span></div>
                        <div className="nk-tb-col tb-col-md"><span>Date</span></div>
                        <div className="nk-tb-col tb-col-lg"><span>Ref</span></div>
                        <div className="nk-tb-col"><span>Amount</span></div>
                        <div className="nk-tb-col"><span className="d-none d-sm-inline">Status</span></div>
                        <div className="nk-tb-col"><span>&nbsp;</span></div>
                      </div>
                      <div className="nk-tb-item">
                        <div className="nk-tb-col">
                          <span className="tb-lead"><a href="#">#95954</a></span>
                        </div>
                        <div className="nk-tb-col tb-col-sm">
                          <div className="user-card">
                            <div className="user-avatar user-avatar-sm bg-purple">
                              <span>AB</span>
                            </div>
                            <div className="user-name">
                              <span className="tb-lead">Abu Bin Ishtiyak</span>
                            </div>
                          </div>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span className="tb-sub">02/11/2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                          <span className="tb-sub text-primary">SUB-2309232</span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="tb-sub tb-amount">4,596.75 <span>USD</span></span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="badge badge-dot badge-dot-xs badge-success">Paid</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-action">
                          <div className="dropdown">
                            <a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                              <ul className="link-list-plain">
                                <li><a href="#">View</a></li>
                                <li><a href="#">Invoice</a></li>
                                <li><a href="#">Print</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="nk-tb-item">
                        <div className="nk-tb-col">
                          <span className="tb-lead"><a href="#">#95850</a></span>
                        </div>
                        <div className="nk-tb-col tb-col-sm">
                          <div className="user-card">
                            <div className="user-avatar user-avatar-sm bg-azure">
                              <span>DE</span>
                            </div>
                            <div className="user-name">
                              <span className="tb-lead">Desiree Edwards</span>
                            </div>
                          </div>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span className="tb-sub">02/02/2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                          <span className="tb-sub text-primary">SUB-2309154</span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="tb-sub tb-amount">596.75 <span>USD</span></span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="badge badge-dot badge-dot-xs badge-danger">Canceled</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-action">
                          <div className="dropdown">
                            <a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                              <ul className="link-list-plain">
                                <li><a href="#">View</a></li>
                                <li><a href="#">Remove</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="nk-tb-item">
                        <div className="nk-tb-col">
                          <span className="tb-lead"><a href="#">#95135</a></span>
                        </div>
                        <div className="nk-tb-col tb-col-sm">
                          <div className="user-card">
                            <div className="user-avatar user-avatar-sm bg-success">
                              <span>CH</span>
                            </div>
                            <div className="user-name">
                              <span className="tb-lead">Cassandra Hogan</span>
                            </div>
                          </div>
                        </div>
                        <div className="nk-tb-col tb-col-md">
                          <span className="tb-sub">01/29/2020</span>
                        </div>
                        <div className="nk-tb-col tb-col-lg">
                          <span className="tb-sub text-primary">SUB-2305564</span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="tb-sub tb-amount">1099.99 <span>USD</span></span>
                        </div>
                        <div className="nk-tb-col">
                          <span className="badge badge-dot badge-dot-xs badge-warning">Due</span>
                        </div>
                        <div className="nk-tb-col nk-tb-col-action">
                          <div className="dropdown">
                            <a className="text-soft dropdown-toggle btn btn-icon btn-trigger" data-toggle="dropdown"><em className="icon ni ni-more-h"></em></a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-xs">
                              <ul className="link-list-plain">
                                <li><a href="#">View</a></li>
                                <li><a href="#">Invoice</a></li>
                                <li><a href="#">Notify</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-inner-sm border-top text-center d-sm-none">
                    <a href="#" className="btn btn-link btn-block">See History</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
