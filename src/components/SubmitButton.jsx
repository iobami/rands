import React, { Fragment } from 'react';

export default function SubmitButton({ title, isLoading, width }) {
  return (
    <Fragment>
      {isLoading ? (
        <button
          disabled={true}
          className="btn btn-primary d-flex justify-content-center"
          style={{ width, minHeight: '48px' }}
        >
          <div
            className="spinner-border text-light"
            style={{ width: '1.7rem', height: '1.7rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </button>
      ) : (
          <button className="btn btn-lg btn-primary text-center" style={{ width }}>
            <span>{title}</span>
          </button>
        )}
    </Fragment>
  );
}
