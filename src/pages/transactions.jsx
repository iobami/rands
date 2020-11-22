import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsAction } from '../redux/entities/transactions';
import { formatISODate } from '../services';

const data = [
  {
    "amount": "0.09",
    "transtype": "receive",
    "receiver_address": "154r1WdmBnzUgzbrkiRcoLg1CShHvwhoYr",
    "user_dollar": "1,677.98",
    "user_date": "1605973271"
  },
  {
    "amount": "0.09",
    "transtype": "receive",
    "receiver_address": "154r1WdmBnzUgzbrkiRcoLg1CShHvwhoYr",
    "user_dollar": "1,677.98",
    "user_date": "1605973110"
  }
]

export default function Transactions() {
  const dispatch = useDispatch();
  const { getTransactionsItem } = useSelector((state) => state.transactions);
  console.log(getTransactionsItem);

  useEffect(() => {
    dispatch(getTransactionsAction.loading());
  }, []);

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
                        <div className="nk-tb-col"><span>Amount</span></div>
                        <div className="nk-tb-col"><span>USD</span></div>
                        <div className="nk-tb-col tb-col-md"><span>Date</span></div>
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
                              <span className="tb-sub tb-amount">{item.user_dollar} <span>USD</span></span>
                            </div>
                            <div className="nk-tb-col tb-col-md">
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
