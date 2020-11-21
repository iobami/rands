import React, { Fragment, useState } from 'react';
import Head from 'next/head';

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    region: ''
  });

  const submitForm = (e) => {
    e.preventDefault();
    
    console.log(user);
  };

  return (
    <Fragment>
      <Head>
        <title>My  Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head pb-0">
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub"><span>Account Setting</span></div>
                <h2 className="nk-block-title fw-normal">My Profile</h2>
                <div className="nk-block-des">
                  <p>You have full control to manage your own account setting. <span className="text-primary"><em className="icon ni ni-info" data-toggle="tooltip" data-placement="right" title="Tooltip on right"></em></span></p>
                </div>
              </div>
            </div>

            <div className="nk-block">
              {false && (
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
              )}


              <div className="row">
                <form action="" onSubmit={submitForm}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="full-name">Name</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="full-name"
                              value={user.name}
                              onChange={(e) => {
                                setUser({
                                  ...user,
                                  name: e.target.value
                                });
                              }}
                              placeholder="Enter your name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="display-name">Email</label>
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              id="display-name"
                              value={user.email}
                              onChange={(e) => {
                                setUser({
                                  ...user,
                                  email: e.target.value
                                });
                              }}
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="phone-no">Phone Number</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="phone-no"
                              value={user.phone}
                              onChange={(e) => {
                                setUser({
                                  ...user,
                                  phone: e.target.value
                                });
                              }}
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="birth-day">Region/Zone</label>
                            <input
                              type="text"
                              className="form-control form-control-lg date-picker"
                              id="birth-daydd"
                              placeholder="Region/Zone"
                              value={user.region}
                              onChange={(e) => {
                                setUser({
                                  ...user,
                                  region: e.target.value
                                });
                              }}
                            />
                          </div>
                        </div>

                        {false && (
                          <div className="col-12">
                            <div className="custom-control custom-switch">
                              <input type="checkbox" className="custom-control-input" id="latest-sale" />
                              <label className="custom-control-label" htmlFor="latest-sale">Use full name to display </label>
                            </div>
                          </div>
                        )}

                        <div className="col-12">
                          <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                            <li>
                              <button
                                className="btn btn-lg btn-primary"
                              >
                                Update Profile
                              </button>
                            </li>
                            <li>
                              <a href="#" data-dismiss="modal" className="link link-light">Cancel</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
