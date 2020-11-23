import React, { Fragment, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { transferAction } from '../redux/entities/transfer';
import { getRecentTransactionsAction, getTransactionsAction } from '../redux/entities/transactions';

export default function TransferModal({ show, handleClose: close }) {
  const dispatch = useDispatch();
  const { transferItem, isLoading } = useSelector((state) => state.transfer);
  const { rateItem } = useSelector((state) => state.services);

  const [showTokenInput, setShowTokenInput] = useState(false);

  const reset = () => dispatch(transferAction.store(null));

  useEffect(() => {
    if (transferItem && transferItem.status === 'success') {
      setShowTokenInput(true);
      dispatch(getRecentTransactionsAction.loading());
      dispatch(getTransactionsAction.loading());
      setTimeout(() => reset(), 5000);
    }
  }, [transferItem]);

  const [rate, setRate] = useState(6650);

  useEffect(() => {
    if (rateItem && rateItem.USD) setRate(rateItem.USD.sell || 18250)
  }, [rateItem]);

  const [transferData, setTransferData] = useState({
    usdAmount: 0,
    btcAmount: 0,
    walletaddress: '',
    token: ''
  });

  const handleClose = () => {
    if (!isLoading) {
      setShowTokenInput(false);
      setTransferData({
        usdAmount: 0,
        btcAmount: 0,
        walletaddress: '',
        token: ''
      });
      close();
    }
  };

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
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="usdAmount">USD Amount</label>
                      <input
                        type="number"
                        min={0}
                        step={0.01}
                        className="form-control form-control-lg"
                        id="usdAmount"
                        value={transferData.usdAmount}
                        onBlur={(e) => {
                          let usd = e.target.value * 1;

                          setTransferData({
                            ...transferData,
                            usdAmount: usd.toFixed(2),
                          });
                        }}
                        onChange={(e) => {
                          const usd = e.target.value;
                          let btc = 0;
                          if (usd > 0) {
                            btc = (usd / rate).toFixed(8);
                          }
                          setTransferData({
                            ...transferData,
                            usdAmount: usd,
                            btcAmount: btc,
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
                        min={0}
                        step={0.00000001}
                        className="form-control form-control-lg"
                        id="btcAmount"
                        value={transferData.btcAmount}
                        onBlur={(e) => {
                          let btc = e.target.value * 1;

                          setTransferData({
                            ...transferData,
                            btcAmount: btc.toFixed(8),
                          });
                        }}
                        onChange={(e) => {
                          let btc = e.target.value * 1;
                          let usd = 0;

                          if (btc > 0) {
                            usd = (btc * rate).toFixed(2);
                          }
                          setTransferData({
                            ...transferData,
                            btcAmount: btc,
                            usdAmount: usd,
                          });
                        }}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {showTokenInput && (
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
                          required={true}
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
