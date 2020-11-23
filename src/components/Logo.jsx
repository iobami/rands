import React, { Fragment } from 'react';
import { LogoText } from '.';

export default function Logo() {

  return (
    <Fragment>
      <img className="logo-dark logo-img" src="./images/microsoft.png" srcSet="./images/microsoft.png" alt="logo-dark" />
      <h6 className="pt-1 ml-1"><LogoText /></h6>
    </Fragment>
  );
}