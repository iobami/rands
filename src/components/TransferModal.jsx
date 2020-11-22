import React, { Fragment, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { transferAction } from '../redux/entities/transfer';

export default function TransferModal({ show, handleClose: close }) {
  const dispatch = useDispatch();
  const { transferItem, isLoading } = useSelector((state) => state.transfer);

  const handleClose = () => {
    if (!isLoading) close();
  };

  const [transferData, setTransferData] = useState({
    usdAmount: 0.09,
    btcAmount: 0.09,
    walletaddress: "154r1WdmBnzUgzbrkiRcoLg1CShHvwhoYr",
    token: "VPLGTDU"
  });

  const reset = () => dispatch(transferAction.store(null));

  // if (transferItem && transferItem.status === 'success') {
  //   setTimeout(() => (window.location.href = routes.entry.path), 1000);
  // }

  const submitForm = (e) => {
    e.preventDefault();
    reset();

    dispatch(transferAction.loadingState(true));
    dispatch(transferAction.loading(transferData));
  };

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex align-items-center">
              <em className="icon ni ni-sign-btc"></em>
              <span>Transfer</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form action="" onSubmit={submitForm}>
            <div className="row gy-4">
              <div className="col-md-12">
                <div className="form-row">
                  <div className="col-md-12 mb-1">
                    <div className="form-group">
                      <label className="form-label" htmlFor="wallet_address">Wallet Address</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="wallet_address"
                        value={transferData.walletaddress}
                        onChange={(e) => {
                          setTransferData({
                            ...transferData,
                            walletaddress: e.target.value
                          });
                        }}
                        placeholder="Enter wallet address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="usdAmount">USD Amount</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="usdAmount"
                        value={transferData.usdAmount}
                        onChange={(e) => {
                          setTransferData({
                            ...transferData,
                            usdAmount: e.target.value
                          });
                        }}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="btcAmount">BTC Amount</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="btcAmount"
                        value={transferData.btcAmount}
                        onChange={(e) => {
                          setTransferData({
                            ...transferData,
                            btcAmount: e.target.value
                          });
                        }}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {false && (
                  <div className="form-row mt-1">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="form-label" htmlFor="token">Token</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="token"
                          value={transferData.token}
                          onChange={(e) => {
                            setTransferData({
                              ...transferData,
                              token: e.target.value
                            });
                          }}
                          placeholder="Enter token"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-12 pl-0 pr-0 mt-2">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <SubmitButton title="Submit" isLoading={isLoading} width="150px" />
                    </li>
                    <li>
                      <a
                        onClick={handleClose}
                        className="btn link text-danger"
                      >
                        Cancel
                        </a>
                    </li>
                  </ul>
                </div>

                <div className="col-12 pl-0 pr-0 mt-2">
                  <Banner
                    show={transferItem}
                    success={transferItem && transferItem.status === 'success'}
                    error={transferItem && transferItem.status === 'error'}
                    title={transferItem && transferItem.status === 'success' ? 'Success !' : 'Error !'}
                    message={transferItem && transferItem.message}
                    reset={reset}
                  />
                </div>
              </div>
            </div>
          </form>

        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
