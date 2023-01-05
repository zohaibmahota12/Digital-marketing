import React from "react";
import "./about.css";
import Button from "../../components/Button/Button";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="about-title">
                <h1>
                  A full service digital <br /> marketing company
                </h1>
                <p>
                  We are a professional digital marketing agency. We develop
                  state-of-the <br />
                  art and effective digital marketing strategies to get you more
                  business and <br /> visibility.
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="about-title-image">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/services-socialmediamarketing-alt-colors-optimized.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="containerfluid">
        <div className="dslc-text-module-content ">
          <div className="col-12 text-center">
            <h2 className="text-center">
              We pursue relationships based on transparency, persistence, mutual
              trust, and integrity with our employees, customers and other
              business partners.
            </h2>
          </div>
        </div>
      </div>
      <div className="about-inner-text">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="inner-text">
                <h3 className="text-center mt-4 pt-4 mb-4 pt-b">
                  Our team of specialists consistently deliver outstanding
                  results for our clients. As full service digital marketing
                  agency we combine creative ideas with vast experience in
                  search technologies to deliver measurable results for our
                  clients. We will help you to build a sustainable, meaningful
                  relationship with your clients by engaging them with your
                  brand using social media promotion.
                </h3>
              </div>
            </div>
            <div className="col-6">
              <div className="inner-text">
                <h3 className="text-center mt-4 pt-4 mb-4 pt-b ">
                  Our team of specialists consistently deliver outstanding
                  results for our clients. As full service digital marketing
                  agency we combine creative ideas with vast experience in
                  search technologies to deliver measurable results for our
                  clients. We will help you to build a sustainable, meaningful
                  relationship with your clients by engaging them with your
                  brand using social media promotion.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="client">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="client-fav-icone">
                <a href="">
                  <i class="fa-thin fa fa-suitcase"></i> &nbsp; 100+ Clients
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="client-fav-icone">
                <a href="">
                  <i class="fa-thin  fa fa-display"></i> &nbsp; 20+ Trainings{" "}
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="client-fav-icone">
                <a href="">
                  <i class="fa-thin  fa fa-microphone"></i> &nbsp; 100+ Clients
                </a>
              </div>
            </div>
            <div className="col-3">
              <div className="client-fav-icone">
                <a href="">
                  <i class="fa-thin  fa fa-wine-glass"></i> &nbsp; 100+ Clients
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* =======================================
                         button
           ======================================= */}
      <Button />

      <section className="our-vision">
        <div className="container">
          <div className="row">
            <div className="our-vision-title">
              <h5 className="text-center mt-4 pt-4 ">OUR VISION</h5>
              <p className="text-center">
                The most recommended digital marketing agency that change the
                way businesses <strong>speak,listen</strong> and{" "}
                <strong>share</strong> on the digital channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="passion">
        <div className="container">
          <div className="row">
            <div className="passion-title">
              <h1 className="text-center">Passionate About Our Clients</h1>
              <p className="text-center">
                Our digital marketing work speaks for itself. We deliver a
                personal, passionate & tailored service to each and every one of
                our clients, big or small.
              </p>
            </div>
            <div className="col-3">
              <div className="passion-inner-image text-center">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/quality-men-haircut-logo.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-3">
              <div className="passion-inner-image text-center">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/spinTouch-inc-logo-220x101.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
