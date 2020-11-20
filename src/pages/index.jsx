import React, { Fragment } from 'react';
import Head from 'next/head';

export default function Default() {

  return (
    <Fragment>
      <Head>
        <title>My  Crypto - Login | DashLite Admin Template</title>
      </Head>

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h4>Login</h4>
              <hr />
            </div>
          </div>
          <form action="">
            <div className="row gy-4">
              <div className="col-md-8 mx-auto">
                <div className="col-md-12 pl-0 pr-0">
                  <div className="form-group">
                    <label className="form-label" for="full-name">Full Name</label>
                    <input type="text" className="form-control form-control-lg" id="full-name" value="Abu Bin Ishtiyak" placeholder="Enter Full name" />
                  </div>
                </div>
                <div className="col-md-12 pl-0 pr-0">
                  <div className="form-group">
                    <label className="form-label" for="display-name">Display Name</label>
                    <input type="text" className="form-control form-control-lg" id="display-name" value="Ishtiyak" placeholder="Enter display name" />
                  </div>
                </div>
                <div className="col-12 pl-0 pr-0 mt-2">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <a href="#" className="btn btn-lg btn-primary">Login</a>
                    </li>
                    {false && (
                      <li>
                        <a href="#" data-dismiss="modal" className="link link-light">Cancel</a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
