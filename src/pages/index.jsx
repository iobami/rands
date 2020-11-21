import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { routes } from '../routes';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/entities/auth';

export default function Login() {
  const dispatch = useDispatch();
  const { loginItem, isLoading } = useSelector((state) => state.auth);

  const [loginData, setLoginData] = useState({
    user_email: '',
    user_password: ''
  });

  const reset = () => dispatch(loginAction.store(null));

  if (loginItem && loginItem.status === 'success') {
    setTimeout(() => (window.location.href = routes.overview.path), 1500);
  }

  const submitForm = (e) => {
    e.preventDefault();
    reset();

    dispatch(loginAction.loadingState(true));
    dispatch(loginAction.loading({
      user_name: loginData.user_email,
      user_password: loginData.user_password
    }));
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
                      value={loginData.user_email}
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          user_email: e.target.value
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
                      value={loginData.user_password}
                      onChange={(e) => {
                        setLoginData({
                          ...loginData,
                          user_password: e.target.value
                        });
                      }}
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                <div className="col-12 pl-0 pr-0 mt-2">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <SubmitButton title="Login" isLoading={isLoading} width="150px" />
                    </li>
                    {false && (
                      <li>
                        <a data-dismiss="modal" className="link link-light">Cancel</a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="col-12 pl-0 pr-0 mt-2">
                  <Banner
                    show={loginItem}
                    success={loginItem && loginItem.status === 'success'}
                    error={loginItem && loginItem.status === 'error'}
                    title={loginItem && loginItem.status === 'success' ? 'Success !' : 'Error !'}
                    message={loginItem && loginItem.message}
                    reset={reset}
                  />
                </div>

                <div className="d-flex flex-row justify-content-between">
                  <Link href={routes.register.path}>
                    <a
                      href={routes.register.path}
                      target="_blank"
                      rel="noreferrer"
                      className="d-block mt-3 text-muted"
                    >
                      Need an account? <span className="text-dark">Register</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
