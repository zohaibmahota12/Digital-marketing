import React from "react";
import "./blog.css";
import {Link} from "react-router-dom"

export default function Blog() {
  return (
    <>
      <div className="blog ">
        <div className="container">
          <div className="row">
            <div
              className="col-8">
              <div className="blog-title ">
                <h4>Latest company updates and industry news</h4>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-email">
                <Link to="">Subscribe to email updates</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================================== inner image section========================== */}

      <div className="inner-blog-post  container ">
        <div className="row">
          <div className="col-sm-6">
            <div className="inner-image">
              <img
                src="https://digitalmarketing.pk/wp-content/uploads/4-Map4Nepal-7-600x400.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="inner-image-data">
              <div className="inner-image-text">
                <h5 className="">
                  Mapping Nepal in Map4Nepal Lahore Mapathon
                  <br />
                </h5>
                <span className="">June 5, 2015</span>
                <p>
                  Over 40 students volunteered to map Nepal, during #Map4Nepal
                  Lahore Mapathon, to help the agencies providing relief and
                  rehabilitation services in Nepal with…
                </p>
                <button className="inner-button btn ">Continue reading</button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mt-4">
            <div className="inner-image">
              <img
                src="https://digitalmarketing.pk/wp-content/uploads/4-Map4Nepal-7-600x400.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="inner-image-data">
              <div className="inner-image-text">
                <h5 className="">
                  Mapping Nepal in Map4Nepal Lahore Mapathon
                  <br />
                </h5>
                <span className="">June 5, 2015</span>
                <p>
                  Over 40 students volunteered to map Nepal, during #Map4Nepal
                  Lahore Mapathon, to help the agencies providing relief and
                  rehabilitation services in Nepal with…
                </p>
                <button className="inner-button btn ">Continue reading</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
