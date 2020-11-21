import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { routes } from '../routes';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../redux/entities/auth';

export default function Register() {
  const dispatch = useDispatch();
  const { registerItem, isLoading } = useSelector((state) => state.auth);

  const [registerData, setRegisterData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  });

  const reset = () => dispatch(registerAction.store(null));

  if (registerItem && registerItem.status === 'success') {
    setTimeout(() => (window.location.href = routes.entry.path), 1000);
  }

  const submitForm = (e) => {
    e.preventDefault();
    reset();

    dispatch(registerAction.loadingState(true));
    dispatch(registerAction.loading(registerData));
  };

  return (
    <Fragment>
      <Head>
        <title>My  Crypto - Registration page | DashLite Admin Template</title>
      </Head>

      <div className="card pt-4 pb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-8 mx-auto mb-3">
              <h4>Dash<span className="text-primary">Lite</span></h4>
              <p>Create your account.</p>
            </div>
          </div>
          <form action="" onSubmit={submitForm}>
            <div className="row gy-4">
              <div className="col-md-8 mx-auto">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="username">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="username"
                        value={registerData.user_name}
                        onChange={(e) => {
                          setRegisterData({
                            ...registerData,
                            user_name: e.target.value
                          });
                        }}
                        placeholder="Enter password"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        value={registerData.user_email}
                        onChange={(e) => {
                          setRegisterData({
                            ...registerData,
                            user_email: e.target.value
                          });
                        }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row mt-2">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone</label>
                      <input
                        type="phone"
                        className="form-control form-control-lg"
                        id="phone"
                        value={registerData.user_phone}
                        onChange={(e) => {
                          setRegisterData({
                            ...registerData,
                            user_phone: e.target.value
                          });
                        }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="display-name">Password</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="display-name"
                        value={registerData.user_password}
                        onChange={(e) => {
                          setRegisterData({
                            ...registerData,
                            user_password: e.target.value
                          });
                        }}
                        placeholder="Enter password"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 pl-0 pr-0 mt-2">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <SubmitButton title="Register" isLoading={isLoading} width="150px" />
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
                    show={registerItem}
                    success={registerItem && registerItem.status === 'success'}
                    error={registerItem && registerItem.status === 'error'}
                    title={registerItem && registerItem.status === 'success' ? 'Success !' : 'Error !'}
                    message={registerItem && registerItem.message}
                    reset={reset}
                  />
                </div>

                <div className="d-flex flex-row justify-content-between">
                  <Link href={routes.entry.path}>
                    <a className="d-block mt-3 text-muted">
                      Already have an account? <span className="text-dark">Sign In</span>
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
