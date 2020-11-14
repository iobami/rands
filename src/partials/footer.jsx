import React from 'react';

export default function Footer() {
  return (
    <div className="nk-footer nk-footer-fluid">
      <div className="container-fluid">
        <div className="nk-footer-wrap">
          <div className="nk-footer-copyright"> &copy; {new Date().getFullYear()} DashLite. Template by <a href="#">Softnio</a>
          </div>
          <div className="nk-footer-links">
            <ul className="nav nav-sm">
              <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
