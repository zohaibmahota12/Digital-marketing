import React from "react";
import "./cards.css";

function Cards({ title, logo, bgColor }) {
  return (
    <>
      {/* #########################################################################################################################
                                                My Card Section 
######################################################################################################################### */}

      <section className="service">
        <div className="myservice-img">
          <img src={logo} alt="something" />
          <p
            className="myservice-title text-center mt-4  pt-4 pb-4"
            style={{ backgroundColor: `${bgColor}` }}
          >
            {title}
          </p>
        </div>
      </section>
    </>
  );
}

export default Cards;
