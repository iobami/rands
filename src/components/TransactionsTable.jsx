import React, { Fragment } from 'react';
import { formatISODate } from '../services';

export default function TransactionsTable({ title, description, data, responseMessage }) {

  return (
    <Fragment>
      <div className="container-xl wide-lg">
        <div className="nk-content-body">
          <div className="nk-block-head pb-0">
            <div className="nk-block-head-sub"><span>{title}</span> </div>
            <div className="nk-block-between-md g-4">
              <div className="nk-block-head-content">
                <div className="nk-block-des">
                  <p>{description}</p>
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
                      <div className="nk-tb-col"><span>Amount</span></div>
                      <div className="nk-tb-col"><span>USD</span></div>
                      <div className="nk-tb-col"><span>Date</span></div>
                      <div className="nk-tb-col tb-col-lg"><span>Address</span></div>
                      <div className="nk-tb-col"><span className="d-none d-sm-inline">Status</span></div>
                      <div className="nk-tb-col"><span>&nbsp;</span></div>
                    </div>

                    {data.map((item, index) => {
                      return (
                        <div className="nk-tb-item" key={index}>
                          <div className="nk-tb-col">
                            <span className="tb-lead"><a href="#">{item.amount}</a></span>
                          </div>
                          <div className="nk-tb-col">
                            <span className="tb-sub tb-amount">
                              {item.user_dollar} {false && <span>USD</span>}
                            </span>
                          </div>
                          <div className="nk-tb-col tb-col">
                            <span className="tb-sub text-primary">{formatISODate(item.user_date)}</span>
                          </div>
                          <div className="nk-tb-col tb-col-lg">
                            <span className="tb-sub text-primary">{item.receiver_address}</span>
                          </div>
                          <div className="nk-tb-col">
                            <span
                              className={`badge badge-dot badge-dot-xs ${item.transtype === 'receive' ? 'badge-success' : 'badge-danger'}`}
                            >
                              {item.transtype}
                            </span>
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
                      );
                    })}

                    {(!data || (data && data.length === 0)) && (
                      <div className="nk-tb-item">
                        <div className="nk-tb-col">
                          <span className="tb-lead">{responseMessage}</span>
                        </div>
                      </div>
                    )}

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
    </Fragment>
  );
}
