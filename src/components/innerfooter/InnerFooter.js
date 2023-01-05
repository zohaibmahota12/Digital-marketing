import React from "react";
import "./innerfooters.css";
// import { Link } from "react-router-dom";

export default function InnerFooter() {
  return (
    <>
      {/* contect us section  */}
      <div className="contect-all mt-4 pt-4">
        <div className="containerfluid">
          <div className="contect-title">
            <a href="/*">
              <h3 className="text-center">
                Contact us for all your Digital Media & Digital Marketing needs.
              </h3>
            </a>
          </div>
        </div>
      </div>
      {/* contect us section  */}
      <div className="contect-us">
        <div className="container">
          <div className="row">
            <div className="col-2 pt-4 mt-4 ">
              <div className="contect-img">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/icon-160x160.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 pt-4 mt-4 ">
              <div className="contect-info-text">
                <h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Iure, in consequuntur! Exercitationem dicta dolorum veritatis
                  consequuntur non aspernatur blanditiis nisi voluptas incidunt!
                  Voluptate quaerat ea quas officiis possimus, tempora enim.
                  Praesentium cupiditate fugit et. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Amet est quaerat natus iure
                  voluptates id dicta, atque vel veniam iste minus, itaque
                  voluptatibus accusantium voluptatum quisquam nihil quia
                  ratione rerum odit aspernatur!
                </h4>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="info-title-1">
                  <i class="fa-thin   fa fa-address-book">
                    &nbsp; &nbsp; Contect us
                  </i>
                  <br />
                  <br />
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit.Impedit odit dignissimos atque
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="info-title-1">
                  <i class="fa-light  fa fa-envelope">
                    &nbsp; &nbsp;zohaib.com@gmail.com
                  </i>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="info-title-1">
                  <i class="fa-thin  fa fa-bell">
                    &nbsp; &nbsp;request a free consultation
                  </i>
                  <br />
                  <br />
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, odit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
