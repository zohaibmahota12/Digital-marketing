import React from "react";
import "./consult.css";
import Button from "../../components/Button/Button";

export default function Consult() {
  return (
    <>
      <section className="dlsc">
        <div className="containerfluid">
          <div className="dlsc-bg-video">
            <div className="image text-center">
              <img src="https://digitalmarketing.pk/wp-content/uploads/services-digital-consultancy-380x380.png" alt="" />
            </div>
            <div className="dlsc-title text-center">
              <h1>Digital Marketing Consultancy</h1>
              <p className="">We develop digital marketing strategies for our clients that result in targeted, relevant, highly customized and cost-effective solutions that deliver measurable returns on your investments.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="dlsc-text">
        <div className="container">
          <div className="dlsc-inner-text mt-4 pt-4">
            <p>
              If you want to succeed in this age of digital devices with many
              screen sizes, you can't ignore digital as a core element or your
              business process. As rightly said by someone,
              <em>go digital or go home</em>{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              We, at Digital Marketing Pakistan™, provide{" "}
              <strong>digital marketing consulting </strong> with an aim to
              define a tight digital strategy for your digital presence that
              focuses on driving your key business goals. Raising your digital
              profile, boosting revenue through digital channels, increasing
              efficiency, reducing costs, training your staff, communicating
              better with your customers or being accessible to your potential
              audience anywhere in the world through digital channels are only a
              few business priorities that are important for all companies. We
              cater to your needs of going digital and then becoming a success
              on digital arena with complex, yet achievable digital marketing
              strategies.
            </p>
          </div>
        </div>
        <Button/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="info-title">
              <h2>Why digital marketing consultancy?</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                delectus voluptatibus sit tempora iusto harum laborum hic iure,
                quo placeat, beatae repellendus numquam necessitatibus
                voluptate. Numquam voluptates, deserunt sed commodi alias
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus veritatis, aspernatur laboriosam nemo mollitia magni possimus temporibus inventore libero nobis a perferendis corporis illum reiciendis incidunt, earum nulla autem minus ut!
                aliquid!
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="info-title">
              <h2>Why Digital Marketing Pakistan™?</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                delectus voluptatibus sit tempora iusto harum laborum hic iure,
                quo placeat, beatae repellendus numquam necessitatibus
                voluptate. Numquam voluptates, deserunt sed commodi alias
                aliquid! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam dicta, quidem deserunt hic et commodi nisi doloremque incidunt iusto expedita quaerat provident, voluptate reprehenderit explicabo ea omnis. Placeat deleniti earum voluptatum accusantium?
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="info-title">
              <div className="img">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/services-prize-on-light-440x440.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6 mt-4 pt-4">
            <div className="info-title">
              <h2>Understanding Your Business</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                delectus voluptatibus sit tempora iusto harum laborum hic iure,
                quo placeat, beatae repellendus numquam necessitatibus
                voluptate. Numquam voluptates, deserunt sed commodi alias
                aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci sapiente et quibusdam ipsum dignissimos est quisquam. A, vero eos, consequuntur quidem autem accusantium at aliquam facilis velit architecto esse, tempora adipisci?
              </p>
            </div>
          </div>
          <div className="col-6 mt-4 pt-4">
            <div className="info-title">
              <h2>Understanding Your Customer</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                delectus voluptatibus sit tempora iusto harum laborum hic iure,
                quo placeat, beatae repellendus numquam necessitatibus
                voluptate. Numquam voluptates, deserunt sed commodi alias
                aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut fuga perspiciatis veritatis nihil iusto autem assumenda, labore natus sit, libero eius exercitationem sapiente quod, magni dolorum quo blanditiis eveniet neque suscipit.
              </p>
            </div>
          </div>
          <div className="col-6 mb-4 pb-4">
            <div className="info-title">
              <div className="info-image">
                <img
                  src="https://digitalmarketing.pk/wp-content/uploads/services-strategy-on-light-440x440.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Button/>
        </div>
      </div>

     
    </>
  );
}
