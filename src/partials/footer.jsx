import React from 'react';
import { LogoText } from '../components';

export default function Footer() {
  return (
    <div className="nk-footer nk-footer-fluid">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright">
             &copy; {new Date().getFullYear()} <LogoText />
          </div>
          <div className="nk-footer-links">
            {false && (
              <ul className="nav nav-sm">
                <li className="nav-item"><a className="nav-link">Terms</a></li>
                <li className="nav-item"><a className="nav-link">Privacy</a></li>
                <li className="nav-item"><a className="nav-link">Help</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
