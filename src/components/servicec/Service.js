import React from "react";
import "../../pages/service/services.css";

function Service({ bgColor, logo, title, description }) {
  return (
    <div className="col-4 mt-4 pt-4">
      <div className="services-card" style={{ backgroundColor: bgColor }}>
        <div className="service-img text-center">
          <img src={logo} alt={title} />
        </div>
        <div className="my-title">
          <h1 className="text-center">{title}</h1>
          <p className="mx-4">{description}</p>
        </div>
        <div className="learn-more ">
          <h4 className="mx-4">
            <i class="fa-light fa fa-arrow-right"></i> Learn more{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Service;
