import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit"> Search </button> </form> */}
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> 
                        {/*ternary operator lght h to dark dark h to light*/}
            <input className="form-check-input" type="checkbox"  onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkmode}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
