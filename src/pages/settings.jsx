import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Settings() {

  return (
    <Fragment>
      <Head>
        <title>Settings - Crypto | DashLite Admin Template</title>
      </Head>

      <div className="nk-content nk-content-fluid">
        <div className="container-xl wide-lg">
          <div className="nk-content-body">
            <div className="nk-block-head pb-0">
              <div className="nk-block-head-content">
                <div className="nk-block-head-sub"><span>Account Setting</span></div>
                <div className="nk-block-des">
                  <p>You have full control to manage your own account setting. <span className="text-primary"><em className="icon ni ni-info" data-toggle="tooltip" data-placement="right" title="Tooltip on right"></em></span></p>
                </div>
              </div>
            </div>

            <div className="nk-block">
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="phone-no">Old Password</label>
                          <input type="text" className="form-control form-control-lg" id="phone-no" value="+880" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label" for="birth-day">New Password</label>
                          <input type="text" className="form-control form-control-lg date-picker" id="birth-day" />
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                          <li>
                            <a href="#" className="btn btn-lg btn-primary">Update</a>
                          </li>
                          <li>
                            <a href="#" data-dismiss="modal" className="link link-light">Cancel</a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
