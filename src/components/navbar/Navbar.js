import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ mylogo }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="digital-image">
            <img src={mylogo} alt="this is img" />
          </div>
          <Link className="navbar-brand" to="/Home"></Link>

          <ul className="navbar-nav ms-auto mb-2 pt-4 pb-4">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link " aria-current="page" to="/Consult">
                Consultancy
              </Link>
            </li>
            <li className="nav-item pe-4">
              <div class="dropdown">
                <div className="row">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/Services"
                  >
                    Services
                  </Link>
                  <div class="dropdown-options">
                    {/* <div className="col-4">
                      <h4 className="text-center">Digital Marketing</h4>
                      <p>How we can help you to get more sales</p>
                    </div>
                    <div className="col-4">
                      <h4 className="text-center">Digital Marketing</h4>
                      <p>How we can help you to get more sales</p>
                    </div>
                    <div className="col-4">
                      <h4 className="text-center">Digital Marketing</h4>
                      <p>How we can help you to get more sales</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div class="dropdown">
                <Link className="nav-link " aria-current="page" to="/About">
                  About
                </Link>
                {/* <div class="dropdown-options">
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <div className="agency">
                          <div className="agency-title">
                            <h4 className="text-center mt-4">Agency</h4>
                            <p>My team</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Contect">
                Contect
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/Blog">
                Blog
              </Link>
            </li>
            <Link to="" target="_blank">
              <p className="text-center mx-4 mt-2">
                <button className="Mybutton">
                  <i class="fa-thin fa fa-square-poll-vertical"></i> FREE
                  CONSULTATION
                </button>{" "}
              </p>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
