import React, { Fragment } from 'react';

export default function Banner({ show, success, error, title, message, reset }) {
  const className = 'alert alert-icon alert-dismissible ' +
    'd-flex justify-content-start align-items-center pl-2 pr-5';

  return (
    <Fragment>
      {show && success && (
        <div className={`${className} alert-success`}>
          <span className="pr-2"><em className="icon ni ni-check-circle"></em></span>

          <div><strong>{title}</strong> {message}</div>

          <button onClick={reset} className="close" data-dismiss="alert"></button>
        </div>
      )}

      {show && error && (
        <div className={`${className} alert-danger`}>
          <span className="pr-2"><em className="icon ni ni-cross-circle"></em></span>

          <div><strong>{title}</strong> {message}</div>

          <button onClick={reset} className="close" data-dismiss="alert"></button>
        </div>
      )}
    </Fragment>
  );
}
