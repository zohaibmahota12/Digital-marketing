import React from "react";
import Button from "../../components/Button/Button";
import Servicecard from "../../components/servicecard/Servicecard";
import logo1 from "../../images/serviceimg/img1.png";
import logo2 from "../../images/serviceimg/img2.png";
import logo3 from "../../images/serviceimg/img3.png";
import logo4 from "../../images/serviceimg/img4.png";
import logo5 from "../../images/serviceimg/img5.png";
import logo6 from "../../images/serviceimg/img6.png";

 export default function Services() {
   var servicesData = [
    {
      title: "Search Engine Optimization",
      description:"Search engine optimization is fundamental and essential. Our SEO strategies will get you a high-ranking placement in search results.",
      logo: { logo1 },
      bgColor: "DarkOrange",
      // link: "https://www.google.com/",
    },
    {
      title: "Pay Per Click",
      description:
        "Pay-per-click marketing is easier and more cost-effective tool that delivers stronger results if used right. We know everything about PPC.",
      logo: { logo2 },
      bgColor: "OrangeRed",
      // link: "https://www.youtube.com/",
    },
    {
      title: "Social Media Marketing",
      description:
        "Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business.",
      logo: { logo3 },
      bgColor: "RoyalBlue",
      // link: "https://www.facebook.com/",
    },
    {
      title: "Social Media Marketing",
      description:
        "Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business.",
      logo: { logo3 },
      bgColor: "DodgerBlue",
      // link: "https://www.facebook.com/",
    },
    {
      title: "Social Media Marketing",
      description:
        "Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business.",
      logo: { logo3 },
      bgColor: "DeepSkyBlue",
      // link: "https://www.facebook.com/",
    },
    {
      title: "Social Media Marketing",
      description:
        "Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business.",
      logo: { logo3 },
      bgColor: "Chocolate",
      // link: "https://www.facebook.com/",
    },
  ];

  // console.log(servicesData);

  return (
    <>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="services-title">
              <h1 className="text-center">Digital Marketing Services</h1>
              <br />
              <p className="my-text">
                We provide professional digital marketing services to give you
                the best digital exposure you deserve. We strongly believe that
                going digital is the way forward, for any business now, and we
                try to reflect our beliefs through dedication in our services.
                We make your brand available to your potential customers at the
                right time and on the right screen. Our winning solutions and
                experience have helped many of our clients to interact and
                engage with their customers in a new better way. We aim to do
                the same for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                                This is Array Method
       $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
      {/* <section className="service-card">
        <div className="container">
          <div className="row">
            {servicesData.map((service) => (
              <Servicecard
                title={service.title}
                description={service.description}
                logo={service.logo}
                bgColor={service.bgColor}
                link={service.link}
              />
            ))} */}
            {/* {servicesData.map((service) => (
              <Servicecard
                title={service.title}
                description={service.description}
                logo={service.logo}
                bgColor={service.bgColor}
                link={service.link}
              />
            ))} */}
          {/* </div>
        </div>
      </section> */}

      {/* ==========================================================
                 Services card section start here 
         ======================================================== */}
      <section className="service-card">
        <div className="container">
          <div className="row">
            <Servicecard
              title="Search Engine Optimization"
              description="Search engine optimization is fundamental and essential. Our SEO strategies will get you a high-ranking placement in search results."
              logo={logo1}
              bgColor="DarkOrange"
              // link="https://www.google.com/"
            />
            <Servicecard
              title="Pay Per Click"
              description="Pay-per-click marketing is easier and more cost-effective tool that delivers stronger results if used right. We know everything about PPC."
              logo={logo2}
              img
              src={logo2}
              bgColor="OrangeRed"
              // link="https://www.youtube.com/"
            />
            <Servicecard
              title="Social Media Marketing"
              description="Customers are interacting with brands through social media. If implemented correctly, SMM can bring remarkable success to your business."
              logo={logo3}
              img
              src={logo3}
              bgColor="RoyalBlue"
              // link="https://www.facebook.com/"
            />

            <Servicecard
              title="Content Marketing Services"
              description="Make your clients’ experience as seamless as possible from the beginning. This kind of mindset we have planing your content strategy."
              logo={logo4}
              img
              src={logo4}
              bgColor="DeepSkyBlue"
              // link="https://www.twitter.com/"
            />

            <Servicecard
              title="Web Development Services"
              description="Put your business online and get more sales  leads with the quality and professional attract and keep them, web development services."
              logo={logo5}
              img
              src={logo5}
              bgColor="DodgerBlue"
              // link="https://www.yahoo.com/"
            />

            <Servicecard
              title="Web Design Services"
              description="A website should not just catch the eye of your visitors, its role is to attract and keep them, as well as communicate your brand message."
              logo={logo6}
              img
              src={logo6}
              bgColor="Chocolate"
              // link="https://www.instagram.com/"
            />
          </div>
        </div>
      </section>

      <Button />
    </>
  );
}
