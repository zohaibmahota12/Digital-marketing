import React from "react";
import "./contect.css";
export default function Contect() {
  return (
    <>
      <div className="container">
        <form className="contact-form-blogger">
          <div className="contact-form-wrap row">
            <div className="col-md-6 mb-3">
              <label className="form-label fs-7 fw-bold" for="field-name">
                Your Name
              </label>
              <input
                className="form-control bg-transparent jt-border-light text-reset"
                id="field-name"
                name="name"
                required=""
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fs-7 fw-bold" for="field-email">
                Email Address
              </label>
              <input
                className="form-control bg-transparent jt-border-light text-reset"
                id="field-email"
                name="email"
                required=""
                type="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label fs-7 fw-bold" for="field-message">
                Message
              </label>
              <textarea
                className="form-control bg-transparent jt-border-light text-reset"
                id="field-message"
                type="Number"
                name="message"
                required=""
                rows="3"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className="col-12 mb-3">
              <button
                className="btn btn-sm fw-bold py-2 px-5 jt-btn-primary"
                type="submit"
              >
                SEND
              </button>
            </div>
          </div>
          <div
            data-success="Thank you message sent successfully."
            data-error="Message failed to send. Please try again an hour later."
            className="contact-form-msg d-none border border-3 rounded text-center p-3 fs-7"
          ></div>
        </form>
      </div>
    </>
  );
}
