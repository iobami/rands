import React, { Fragment, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import QRCode from 'qrcode.react';

import { Banner } from '../components';
import { useSelector } from 'react-redux';

export default function WalletDetailModal({ show, handleClose }) {
  const { getUserItem } = useSelector((state) => state.user);

  const [showBanner, toggleBanner] = useState(false);
  const [walletAddress, setWalletAddress] = useState('walletofdjkpo');

  const copyText = (text) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toggleBanner(true);
      setTimeout(() => toggleBanner(false), 3000);
    }
  };

  useEffect(() => {
    if (getUserItem) setWalletAddress(getUserItem.user_wallet || '');
  }, [getUserItem]);

  return (
    <Fragment>
      <Modal
        size="sm"
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
              <span>Wallet Detail</span>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Banner
              show={showBanner}
              success={true}
              message="Wallet address copied !"
              reset={() => toggleBanner(false)}
            />

            <p className="mb-1 d-flex justify-content-center align-items-center">
              <span className="align-self-center"><b>Wallet Address</b></span>
              {/* {document && document.queryCommandSupported('copy') && (
                
              )} */}
              <span
                style={{ cursor: 'pointer' }}
                className="ml-2"
                onClick={() => copyText(walletAddress)}
              >
                <em className="icon ni ni-copy"></em>
              </span>
            </p>
            <p className="text-muted mb-1 text-center">
              {walletAddress}
            </p>

            <div className="d-flex justify-content-center mt-2">
              <QRCode value="http://facebook.github.io/react/" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
