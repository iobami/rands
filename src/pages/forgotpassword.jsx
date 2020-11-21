import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { routes } from '../routes';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction } from '../redux/entities/auth';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { forgotPasswordItem, isLoading } = useSelector((state) => state.auth);

  const [forgotPasswordData, setForgotPasswordData] = useState({
    user_email: ''
  });

  const reset = () => dispatch(forgotPasswordAction.store(null));

  if (forgotPasswordItem && forgotPasswordItem.status === 'success') {
    setTimeout(() => (window.location.href = routes.entry.path), 1500);
  }

  const submitForm = (e) => {
    e.preventDefault();
    reset();

    dispatch(forgotPasswordAction.loadingState(true));
    dispatch(forgotPasswordAction.loading(forgotPasswordData));
  };

  return (
    <Fragment>
      <Head>
        <title>My  Crypto - Forgot Password | DashLite Admin Template</title>
      </Head>

      <div className="card pt-4 pb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mx-auto mb-3">
              <h4>Dash<span className="text-primary">Lite</span></h4>
              <p>We will send an email reset your password.</p>
            </div>
          </div>
          <form action="" onSubmit={submitForm}>
            <div className="row gy-4">
              <div className="col-md-8 mx-auto" style={{ minHeight: '300px' }}>
                <div className="nk-strecth-btn">
                  <div>
                    <div className="col-md-12 pl-0 pr-0">
                      <div className="form-group">
                        <label className="form-label" htmlFor="full-name">Email</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="full-name"
                          value={forgotPasswordData.user_email}
                          onChange={(e) => {
                            setForgotPasswordData({
                              ...forgotPasswordData,
                              user_email: e.target.value
                            });
                          }}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="col-12 pl-0 pr-0 mt-2">
                      <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                        <li>
                          <SubmitButton title="Submit" isLoading={isLoading} width="150px" />
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
                        show={forgotPasswordItem}
                        success={forgotPasswordItem && forgotPasswordItem.status === 'success'}
                        error={forgotPasswordItem && forgotPasswordItem.status === 'error'}
                        title={forgotPasswordItem && forgotPasswordItem.status === 'success' ? 'Success !' : 'Error !'}
                        message={forgotPasswordItem && forgotPasswordItem.message}
                        reset={reset}
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-between">
                    <Link href={routes.register.path}>
                      <a
                        className="d-block mt-3 text-muted"
                      >
                        Need an account? <span className="text-dark">Register</span>
                      </a>
                    </Link>

                    <Link href={routes.entry.path}>
                      <a
                        className="d-block mt-3 text-muted"
                      >
                        <span className="text-dark">Sign In</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
