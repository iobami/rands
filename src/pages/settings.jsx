import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import { Banner, SubmitButton } from '../components';

import { useDispatch, useSelector } from 'react-redux';
import { changePasswordAction } from '../redux/entities/auth';

export default function Settings() {
  const dispatch = useDispatch();
  const { changePasswordItem, isLoading } = useSelector((state) => state.auth);

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const reset = () => dispatch(changePasswordAction.store(null));

  const submitForm = (e) => {
    e.preventDefault();
    reset();

    dispatch(changePasswordAction.loadingState(true));
    dispatch(changePasswordAction.loading(password));
  };

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
                <form action="" onSubmit={submitForm}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="phone-no">Old Password</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="phone-no"
                              value={password.oldPassword}
                              onChange={(e) => {
                                setPassword({
                                  ...password,
                                  oldPassword: e.target.value
                                });
                              }}
                              placeholder="Old Password"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label" htmlFor="birth-day">New Password</label>
                            <input
                              type="text"
                              className="form-control form-control-lg date-picker"
                              id="birth-day"
                              placeholder="New Password"
                              value={password.newPassword}
                              onChange={(e) => {
                                setPassword({
                                  ...password,
                                  newPassword: e.target.value
                                });
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                            <li>
                              <SubmitButton title="Update" isLoading={isLoading} width="150px" />
                            </li>
                            <li>
                              {false && (
                                <a data-dismiss="modal" className="link link-light">Cancel</a>
                              )}
                            </li>
                          </ul>
                        </div>

                        <div className="col-12 pl-0 pr-0 mt-2">
                          <Banner
                            show={changePasswordItem}
                            success={changePasswordItem && changePasswordItem.status === 'success'}
                            error={changePasswordItem && changePasswordItem.status === 'error'}
                            title={changePasswordItem && changePasswordItem.status === 'success' ? 'Success !' : 'Error !'}
                            message={changePasswordItem && changePasswordItem.message}
                            reset={reset}
                          />
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
