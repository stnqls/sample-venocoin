import React from "react";
import "./Page.css";

function Page() {
  return (
    <React.Fragment>
      <section className="page_main">
        <div className="inner">
          <h1 className="page_main__title">
            Virtual Economy of
            <br /> Node Operation, VENO
          </h1>
          <h2 className="page_main__subtitle">
            venocoin offers innovative cryptocurrency unlike ever before.
          </h2>
        </div>
      </section>

      {/* page 1 */}

      <section className="page_one">
        {/* <div className="inner"> */}
        <div className="page_one__textarea">
          <div className="page_one__textarea__menu">VISION</div>
          <div className="page_one__textarea__title">
            VenoCoin is easy to use
            <br /> anytime, anywhere.
          </div>
          <div className="page_one__textarea__text">
            VenoCoin is a payment method used in unmanned convenience store
            systems. Currently, the unmanned convenience store business is
            growing rapidly, and it is a promising business with significantly
            higher advantages than existing systems such as labor and management
            costs, and the value of VenoCoin, which is used as a means of
            payment, also grows significantly.
          </div>
          <div className="page_one__textarea__buttons">
            <button type="button" className="page_one__textarea__buttons__text">
              Whitepaper
            </button>
            <button
              type="button"
              className="page_one__textarea__buttons__arrow"
            ></button>
          </div>
        </div>
        <div className="page_one__imgarea"></div>
        {/* </div> */}
      </section>
    </React.Fragment>
  );
}

export default Page;
