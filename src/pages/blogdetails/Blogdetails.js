import React from "react";
import "./blogdetail.css";
import { Link } from "react-router-dom";

function Blogdetails() {
  return (
    <>
      <section className="blogdetails">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-4 col-xxl-4 col-8">
              <div className="blog-title  mt-3">
                <h1>
                  We won “Best Innovative Idea” Award at P@SHA Launchpad 2013
                </h1>
                <span>July 4, 2013 Press Releases</span>
              </div>
            </div>
            <div className="col-md-4 col-sm-2 col-xxl-2 col-4">
              <div className="button mt-4 text-center">
                <button>No Comments</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* *******************Blog Detail ************************ */}
      <div className="detail-section">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="content col-md-8 col-sm-4 ">
                <p>
                  We are pleased ("<em>and excited</em> ") to announce that our
                  idea “Best Price Ads” won the “{" "}
                  <strong>Best Innovative Idea</strong>” award at
                  <br />
                  <p>
                    And this is not our first win. We also won{" "}
                    <strong>Plan 9 Tech Incubation</strong> for the same idea in
                    Lahore on October 14, 2012.
                  </p>
                  <img
                    src=" https://digitalmarketing.pk/wp-content/uploads/best-price-ads-pasha-launchpad-2013-lahore-winner-1-600x400.jpg"
                    alt="this is image"
                  />
                  <p>
                    Usman Latif, founder of Internet Marketing Pakistan™,
                    receiving a cheque of PKR 200,000 from judges at P@SHA
                    Launchpad 2013 in Lahore.
                  </p>
                </p>
              </div>
                      </div>
                      {/* ------------about us--------------- */}
            <div className="col-2">
              <div className="about-us">
                <div className="title">
                  <h6>About us and this blog</h6>
                  <p className="description mt-4">
                    We are a professional digital marketing agency. We develop
                    state-of-the-art and effective digital marketing strategies
                    to get you more business and visibility.
                  </p>
                  <div className="button">
                    <button className="learn-more">Learn More about us </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* &&&&&&&&&&&&&&&&& Best price    &&&&&&&&&&&&&&&&& */}

      <div className="best-price-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="title">
                <h1>What is Best Price Ads?</h1>
                <p>
                  Best Price Ads is a price comparison and ad engine which lets
                  bloggers and publishers earn more money. It will create a new
                  stream of revenue for most publishers/bloggers and will change
                  the way bloggers think of earning online.
                </p>
                <br />
                <p>
                  We may not go into the specifics of the product right now but
                  since we are experienced in Internet Marketing and Affiliate
                  Marketing, we understand the problems faced by online
                  publishers online. We want to let them earn more with no extra
                  effort. It might (someday) change the way we earn online as
                  the model is proven already. We are just tweaking it according
                  to the needs of online buyers today.
                </p>
                <br />
                <p>
                  For the time being, we just wanted to share our achievement
                  with you and wanted to express how excited we are.
                </p>
                <div className="title-2">
                  <h2>What is P@SHA LaunchPad?</h2>
                  <p>
                    P@SHA LaunchPad is an initiative by Pakistan Software Houses
                    Association for IT & ITES (P@SHA) to help and promote new
                    innovative startups and ideas and get them the traction and
                    visibility they deserve. Below is a more detailed
                    description taken from Jehan Ara’s blog. Jehan is the
                    current President of P@SHA.
                  </p>
                  <br />
                  <p>
                    The vision behind P@SHA LaunchPad is simple – find the best
                    technology ideas and start-ups, bring them in front of the
                    Pakistan IT industry’s most experienced and influential
                    professionals and entrepreneurs and highlight them through
                    online showcases and social media.
                  </p>
                  <br />

                  <p>
                    The purpose is to create a platform where young people with
                    great ideas, and where early-stage companies with innovative
                    products, can have the opportunity to pitch their ideas in
                    front of people who ask relevant questions, make suggestions
                    to help develop the idea or product, assist with market
                    identification, mentoring and possibly investment.
                  </p>
                  <br />
                  <p>
                    For more details about P@SHA and its events, please visit
                    P@SHA Website.
                  </p>
                  <br />
                  <p>
                    Last but not the least, we would like to thank all our
                    mentors who helped us refine our idea which led us win Plan
                    9 Tech Incubation and P@SHA LaunchPad. And, we would also
                    like to thank P@SHA for organizing this event and giving us
                    an opportunity to participate in this competition. Just for
                    the sake of information, out of 165 teams overall, only 20
                    teams were shortlisted to present and we were one of them.
                  </p>
                </div>
                <div className="meta-avatar mb-4">
                  <div className="meta-icone">
                    <img
                      src="https://secure.gravatar.com/avatar/545bdbbf1fc6cc83567b3de090000313?s=100&d=mm&r=g
                                      "
                      alt=""
                    />
                    <a href="">Public Relations</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="info-box ms-4">
                <div className="fav-icone">
                  <i class="fa-regular fa-presentation-screen"></i>
                  <p className="text-center">Request a free quote</p>
                  <br />
                  <p>
                    We offer professional Digital Marketing services that help
                    the websites increase digital brand awareness drastically
                    and generate more leads and sales from the digital
                    platforms.
                                  </p>
                                  <div className="contect-now-button text-center">
                                  <button>Contact now</button>
                                  </div>
                                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogdetails;
