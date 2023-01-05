import React from "react";
import "./servicescard.css";

function Servicecard({ bgColor, title, description, logo, link }) {
  return (
    <>
      <div className="col-4 mb-4">
        <div
          className="services-card"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="service-img text-center">
            <img src={logo} alt="something" />
          </div>
          <div className="my-title">
            <h1 className="text-center">{title}</h1>
            <p className="mx-4">{description}</p>
          </div>
          <div
            className="learn-more "
            style={{ backgroundColor: `${bgColor}` }}
          >
            <h4 className="mx-4">
              <a href={link} target="_target">
                <i class="fa-light fa fa-arrow-right"></i> Learn more
              </a>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicecard;
