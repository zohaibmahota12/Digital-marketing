import React from "react";
import "./button.css"
import {Link} from "react-router-dom"


function Button() {
  return (
    <>
      <div className="  Button">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ms-auto ps-4">
           <Link to="/*">
            <button className="mybuttonn"><i class="fa-thin fa fa-comment-dots"></i> Tell us about your project</button>
           </Link>
           </div>
            <div className="col-md-5 me-auto ">
           <Link to="/*">
            <button className="mybutton"><i class="fa-thin fa fa-dollar-sign"></i> Request a FREE Consultation   </button>
           </Link>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;
