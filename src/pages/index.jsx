import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { routes } from '../routes';
import { Banner, SubmitButton } from '../components';

export default function Default() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const submitForm = (e) => {
    e.preventDefault();

    window.location.href = routes.overview.path;
  };

  return (
    <Fragment>
      <Head>
        <title>My  Crypto - Login | DashLite Admin Template</title>
      </Head>

      <div className="card pt-4 pb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mx-auto mb-3">
              <h4>Dash<span className="text-primary">Lite</span></h4>
              <p>Welcome back! Log in to your account.</p>
            </div>
          </div>
          <form action="" onSubmit={submitForm}>
            <div className="row gy-4">
              <div className="col-md-8 mx-auto">
                <div className="col-md-12 pl-0 pr-0">
                  <div className="form-group">
                    <label className="form-label" htmlFor="full-name">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="full-name"
                      value={loginData.email}
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          email: e.target.value
                        });
                      }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="col-md-12 pl-0 pr-0 mt-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="display-name">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="display-name"
                      value={loginData.password}
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          password: e.target.value
                        });
                      }}
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="col-12 pl-0 pr-0 mt-2">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <SubmitButton title="Login" isLoading={false} width="150px" />
                      {/* <button className="btn btn-lg btn-primary">Login</button> */}
                    </li>
                    {false && (
                      <li>
                        <a href="#" data-dismiss="modal" className="link link-light">Cancel</a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="col-12 pl-0 pr-0 mt-2">
                  <Banner success={false} error={false} title="Success !" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
