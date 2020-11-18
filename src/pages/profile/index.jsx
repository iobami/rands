import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Default() {

  return (
    <Fragment>
      <Head>
        <title>My  Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head">
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub"><span>Account Setting</span></div>
                <h2 className="nk-block-title fw-normal">My Profile</h2>
                <div className="nk-block-des">
                  <p>You have full control to manage your own account setting. <span className="text-primary"><em className="icon ni ni-info" data-toggle="tooltip" data-placement="right" title="Tooltip on right"></em></span></p>
                </div>
              </div>
            </div>
            <ul className="nk-nav nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" href="html/crypto/profile.html">Personal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="html/crypto/profile-security.html">Security</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="html/crypto/profile-notification.html">Notifications</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="html/crypto/profile-connected.html">Connect Social</a>
              </li>
            </ul>
            <div className="nk-block">
              <div className="alert alert-warning">
                <div className="alert-cta flex-wrap flex-md-nowrap">
                  <div className="alert-text">
                    <p>Upgrade your account to unlock full feature and increase your limit of transaction amount.</p>
                  </div>
                  <ul className="alert-actions gx-3 mt-3 mb-1 my-md-0">
                    <li className="order-md-last">
                      <a href="#" className="btn btn-sm btn-warning">Upgrade</a>
                    </li>
                    <li>
                      <a href="#" className="link link-primary">Learn More</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nk-block-head">
                <div className="nk-block-head-content">
                  <h5 className="nk-block-title">Personal Information</h5>
                  <div className="nk-block-des">
                    <p>Basic info, like your name and address, that you use on Nio Platform.</p>
                  </div>
                </div>
              </div>
              <div className="nk-data data-list">
                <div className="data-head">
                  <h6 className="overline-title">Basics</h6>
                </div>
                <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                  <div className="data-col">
                    <span className="data-label">Full Name</span>
                    <span className="data-value">Abu Bin Ishtiyak</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                </div>
                <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                  <div className="data-col">
                    <span className="data-label">Display Name</span>
                    <span className="data-value">Ishtiyak</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                </div>
                <div className="data-item">
                  <div className="data-col">
                    <span className="data-label">Email</span>
                    <span className="data-value">info@softnio.com</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more disable"><em className="icon ni ni-lock-alt"></em></span></div>
                </div>
                <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                  <div className="data-col">
                    <span className="data-label">Phone Number</span>
                    <span className="data-value text-soft">Not add yet</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                </div>
                <div className="data-item" data-toggle="modal" data-target="#profile-edit">
                  <div className="data-col">
                    <span className="data-label">Date of Birth</span>
                    <span className="data-value">29 Feb, 1986</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                </div>
                <div className="data-item" data-toggle="modal" data-target="#profile-edit" data-tab-target="#address">
                  <div className="data-col">
                    <span className="data-label">Address</span>
                    <span className="data-value">2337 Kildeer Drive,<br />Kentucky, Canada</span>
                  </div>
                  <div className="data-col data-col-end"><span className="data-more"><em className="icon ni ni-forward-ios"></em></span></div>
                </div>
              </div>
              <div className="nk-data data-list">
                <div className="data-head">
                  <h6 className="overline-title">Preferences</h6>
                </div>
                <div className="data-item">
                  <div className="data-col">
                    <span className="data-label">Language</span>
                    <span className="data-value">English (United State)</span>
                  </div>
                  <div className="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" className="link link-primary">Change Language</a></div>
                </div>
                <div className="data-item">
                  <div className="data-col">
                    <span className="data-label">Date Format</span>
                    <span className="data-value">M d, YYYY</span>
                  </div>
                  <div className="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" className="link link-primary">Change</a></div>
                </div>
                <div className="data-item">
                  <div className="data-col">
                    <span className="data-label">Timezone</span>
                    <span className="data-value">Bangladesh (GMT +6)</span>
                  </div>
                  <div className="data-col data-col-end"><a href="#" data-toggle="modal" data-target="#profile-language" className="link link-primary">Change</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
