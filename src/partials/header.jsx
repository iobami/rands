import React, { useState } from 'react';
import { routes } from '../routes';

export default function Header() {
  const [showMiniProfile, setShowMiniProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(true);

  return (
    <div className="nk-header nk-header-fluid nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ml-n1">
            <a className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href={routes.entry.path} className="logo-link">
              <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
              <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
              <span className="nio-version">Crypto</span>
            </a>
          </div>
          <div className="nk-header-news d-none d-xl-block">
            <div className="nk-news-list">
              <a className="nk-news-item" href="#">
                <div className="nk-news-icon">
                  <em className="icon ni ni-card-view"></em>
                </div>
                <div className="nk-news-text">
                  <p>Do you know the latest update of 2019? <span> A overview of our is now available on YouTube</span></p>
                  <em className="icon ni ni-external"></em>
                </div>
              </a>
            </div>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className={showMiniProfile ? 'dropdown user-dropdown show' : 'dropdown user-dropdown'}>
                <a
                  onClick={() => {
                    setShowNotifications(false);
                    setShowMiniProfile(!showMiniProfile);
                  }}
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded={showMiniProfile}
                >
                  <div className="user-toggle">
                    <div className="user-avatar sm">
                      <em className="icon ni ni-user-alt"></em>
                    </div>
                    <div className="user-info d-none d-md-block">
                      <div className="user-status user-status-unverified">Unverified</div>
                      <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
                    </div>
                  </div>
                </a>
                <div className={showMiniProfile ? 'dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1 show' : 'dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1'}>
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-avatar">
                        <span>AB</span>
                      </div>
                      <div className="user-info">
                        <span className="lead-text">Abu Bin Ishtiyak</span>
                        <span className="sub-text">info@softnio.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-inner user-account-info">
                    <h6 className="overline-title-alt">Nio Wallet Account</h6>
                    <div className="user-balance">12.395769 <small className="currency currency-btc">BTC</small></div>
                    <div className="user-balance-sub">Locked <span>0.344939 <span className="currency currency-btc">BTC</span></span></div>
                    <a href="#" className="link"><span>Withdraw Funds</span> <em className="icon ni ni-wallet-out"></em></a>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li><a href="html/crypto/profile.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                      <li><a href="html/crypto/profile-security.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                      <li><a href="html/crypto/profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className={showNotifications ? 'dropdown notification-dropdown mr-n1 show' : 'dropdown notification-dropdown mr-n1'}>
                <a
                  onClick={() => {
                    setShowMiniProfile(false);
                    setShowNotifications(!showNotifications);
                  }}
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-toggle="dropdown"
                  aria-expanded={showNotifications}
                >
                  <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em></div>
                </a>
                <div className={showNotifications ? 'dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1 show' : 'dropdown-menu dropdown-menu-xl dropdown-menu-right dropdown-menu-s1'}>
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">Notifications</span>
                    <a href="#">Mark All as Read</a>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">You have requested to <span>Widthdrawl</span></div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left"></em>
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">Your <span>Deposit Order</span> is placed</div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-foot center">
                    <a href="#">View All</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
