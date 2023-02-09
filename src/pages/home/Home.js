import React from "react";
import Cards from "../../components/cards/Cards";
import Button from "../../components/Button/Button";
import logo1 from "../../images/serviceimg/img1.png";
import logo2 from "../../images/serviceimg/img2.png";
import logo3 from "../../images/serviceimg/img3.png";
import logo4 from "../../images/serviceimg/img4.png";
import logo5 from "../../images/serviceimg/img5.png";
import logo6 from "../../images/serviceimg/img6.png";
import Carousel from 'react-material-ui-carousel'


import "./home.css";
export default function Home() {
  return (
    <>
                            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                                                  Slider Section
                              $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      

      <div className="ms-loading-container">
        
      <img src="https://source.unsplash.com/800x280/?marketing," className="d-block w-100" alt="Digital_marketing"/>
      </div>

      <div className="modules-section">
        <div className="container">
          <div className="title">
            <h1 className="text-center">
              Premier Digital Marketing Agency in Pakistan
            </h1>
            <blockquote>
              <p className="text-center second-text">
                <em>
                  "The best time to go digital was 10 years ago, the second best
                  time is now."
                </em>
              </p>
            </blockquote>
            <p className="third-text">
              Digital Marketing Pakistan™, one of the top digital marketing
              agencies in Pakistan, provides A to Z solutions for any business
              to go digital and become a success in this age of digital devices
              and screens. Internet and gadgets has changed the way consumers
              interact with brands. We help your business to adapt to the change
              and succeed.
            </p>
          </div>
        </div>
      </div>
      {/*##############################################################
                      dslc-modules-section 
            ##########################################################*/}

      <div className="dslc-modules-section">
        <div className="container">
          <div className="row">
            <div className="col-4 ms-auto ">
              <div className="dslc-images">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/seo_specialist_workplace-optimized.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 ms-auto ">
              <div className="dslc-text-module-content ">
                <h2 className="mx-4">
                  Get your digital marketing in order &nbsp;
                </h2>
                <p className="mx-4">
                  We provide quality digital marketing solutions to help you
                  more leads and sales through your digital assets and get you
                  in front of your target audience at the right time and on the
                  right digital screen. Digital Marketing Pakistan™ is your one
                  stop solution for all things digital.
                </p>

                <div className="fav-icone">
                  <i class="fa-light fa fa-user">
                    <span>
                      &nbsp; We will bring you new pre-qualified leads and sales
                    </span>
                  </i>
                </div>

                <div className="fav-icone">
                  <i class="fa-thin  fa fa-clock">
                    <span>&nbsp; We know how to save you time and money</span>
                  </i>
                </div>

                <div className="fav-icone">
                  <i class="fa-thin fa fa-trophy">
                    <span>
                      &nbsp; We have years of digital marketing experience
                    </span>
                  </i>
                </div>
              </div>

              <button className="btn btn-primary text-center">
                <i class="fa-light fa fa-arrow-right"></i> Learn more about us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-module-content">
        <div className="container">
          <div className="title">
            <h2 className="text-center">
              Full Service Digital Marketing Agency
            </h2>
            <p className="text-center">
              Digital Marketing and Digital Branding &nbsp; Experts
            </p>
          </div>
        </div>
      </div>

      {/* #############################################################
                           My services Card Section 
         ############################################################ */}

      <section className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="service1">
                <Cards
                  title="Digital Marketing Consultancy"
                  bgColor="green"
                  logo={logo2}
                  img
                  src={logo2}
                  style={{ marginBottom: "50px" }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="services2">
                <Cards
                  title="Digital Marketing Services"
                  logo={logo1}
                  img
                  src={logo1}
                  style={{ marginBottom: "50px" }}
                  bgColor="chocolate"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="services3">
                <Cards
                  title="Digital Marketing training "
                  logo={logo3}
                  img
                  src={logo3}
                  style={{ marginBottom: "50px" }}
                  bgColor="FireBrick"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="services4">
                <Cards
                  title="Digital Development Services"
                  logo={logo4}
                  img
                  src={logo4}
                  style={{ marginBottom: "50px" }}
                  bgColor="RoyalBlue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                              My Button           
          +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
      <Button />

      <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>

      <script>
$(document).ready(function () {
  
});

      </script>
    </>
  );
}
