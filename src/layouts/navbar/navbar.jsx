/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/image/logo.png";
import "./navbar.css";
import MaterialIcon from "material-icons-react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary menu-bar">
      <div className="container-fluid ">
        <ul className="navbar-nav mr-auto top-left">
          <li className="nav-item d-flex">
            <a className="logo ">
              <img src={logo} alt="Accenture logo" />
            </a>
          </li>
          <p className="divider">|</p>&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item">
            <div>
              <p className="myconcerto">myConcerto</p>
              <p className="conversion">Finance In a Box</p>
            </div>
          </li>
        </ul>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu mainWrapper">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div> */}
        <div className="mainWrapper">
          <div className="selectWrapper">
            <select
              className="form-select dropdowncss"
              style={{ border: "none" }}
            >
              <option value="Enterprise" selected>
                Enterprise
              </option>
              <option value="Finance">Finance</option>
              <option value="Customer Experience">Customer Experience</option>
            </select>
          </div>
          <div className="textbox">
            <input
              type="text"
              className="form-control"
              placeholder="SAP"
              //   value="SAP"
            />
          </div>
          <div class="searchButton">
            <button class="buttoncss">
              <span>
                <MaterialIcon icon="search" color="#ffffff" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link">
            <MaterialIcon icon="person" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link pt-1">
            <a class="navbar-brand text-black headerText userDesc">New User</a>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <MaterialIcon icon="exit_to_app" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
