import React from "react";
import "./Page.scss";

import arrow from "../images/arrow-right.png";
import first from "../images/page2-01.webp";
import second from "../images/page2-02.webp";
import third from "../images/page2-03.webp";
import coin from "../images/page4.webp";

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

      <section className="page-one">
        <div className="page-one__textarea">
          <div className="page-one__textarea__contents">
            <div className="page-one__textarea__contents__menu">VISION</div>
            <div className="page-one__textarea__contents__title">
              VenoCoin is easy to use
              <br /> anytime, anywhere.
            </div>
            <div className="page-one__textarea__contents__text">
              VenoCoin is a payment method used in unmanned convenience store
              systems. Currently, the unmanned convenience store business is
              growing rapidly, and it is a promising business with significantly
              higher advantages than existing systems such as labor and
              management costs, and the value of VenoCoin, which is used as a
              means of payment, also grows significantly.
            </div>
            <div className="page-one__textarea__contents__buttons">
              <button
                type="button"
                className="page-one__textarea__contents__buttons__text"
              >
                Whitepaper
              </button>
              <button
                type="button"
                className="page-one__textarea__contents__buttons__arrow"
              >
                <img
                  src={arrow}
                  alt="arrow-right"
                  className="page-one__textarea__contents__buttons__arrow__img"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="page-one__imgarea"></div>
      </section>

      {/* page 2 */}
      <section className="page-two">
        <div className="page-two__header">
          <div className="page-two__header__menu">SERVICES</div>
          <div className="page-two__header__title">
            Use in unattended
            <br /> convenience stores that
            <br /> support VENO PAY
          </div>
        </div>
        <div className="page-two__body">
          <ul className="page-two__body__lists">
            <li className="page-two__body__lists__item">
              <div className="page-two__body__lists__item__textarea">
                <h1 className="page-two__body__lists__item__textarea__title">
                  Pay Unattended
                  <br />
                  Convenience
                  <br />
                  Store
                </h1>
                <h1 className="page-two__body__lists__item__textarea__text">
                  The global unmanned convenience store market is developing
                  rapidly. In the past, it was a system where people were
                  directly resident and managed, but after the outbreak of the
                  global epidemic (COVID-19), non-face-to-face services are
                  increasing rapidly.
                </h1>
              </div>
              <div className="page-two__body__lists__item__imgarea">
                <img
                  src={first}
                  alt=""
                  className="page-two__body__lists__item__imgarea__img"
                />
              </div>
            </li>
            <li className="page-two__body__lists__item">
              <div className="page-two__body__lists__item__imgarea">
                <img
                  src={second}
                  alt=""
                  className="page-two__body__lists__item__imgarea__img"
                />
              </div>
              <div className="page-two__body__lists__item__textarea">
                <h1 className="page-two__body__lists__item__textarea__title">
                  REAL-TIME
                  <br />
                  PAYMENTS
                </h1>
                <h1 className="page-two__body__lists__item__textarea__text">
                  The radical development of cryptocurrencies is also
                  phenomenal. Since 2017, Bitcoin and many other
                  cryptocurrencies have become a huge technology that is showing
                  interest in institutions and governments.
                </h1>
              </div>
            </li>
            <li className="page-two__body__lists__item">
              <div className="page-two__body__lists__item__textarea">
                <h1 className="page-two__body__lists__item__textarea__title">
                  V-STORE
                  <br />
                  WITH VENO
                </h1>
                <h1 className="page-two__body__lists__item__textarea__text">
                  The unmanned convenience store and non-face-to-face system
                  minimize maintenance costs, supply products to consumers at
                  low prices, and secure cutting-edge technology by enabling
                  payment using cryptocurrency. VENOCOIN is a pioneer and
                  innovative cryptocurrency.
                </h1>
              </div>
              <div className="page-two__body__lists__item__imgarea">
                <img
                  src={third}
                  alt=""
                  className="page-two__body__lists__item__imgarea__img"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* page 3 */}
      <section className="page-three">
        <div className="page-three__contain">
          <div className="page-three__contain__menu">WHY VENO</div>
          <div className="page-three__contain__title">
            Cryptocurrency using
            <br /> unmanned convenience
            <br /> store business
          </div>
          <div className="page-three__contain__text">
            Many cryptocurrency projects did not actually go into business.
            because the business contents were too fictional and the profit
            structure was uncertain. However, VENOCOIN has a clear actual
            business item. That's why you should choose VENO.
          </div>
        </div>
      </section>

      {/* page 4 */}
      <section className="page-four">
        <div className="page-four__imgarea">
          <img src={coin} alt="" className="page-four__imgarea__img" />
        </div>
        <div className="page-four__textarea">
          <div className="page-four__textarea__menu">VENO Economy</div>
          <div className="page-four__textarea__count">Milion</div>
          <ul className="page-four__textarea__list">
            <li className="page-four__textarea__list__item">
              <div className="page-four__textarea__list__item__number">
                2,000
              </div>
              <hr className="page-four__textarea__list__item__hr" />
              <div className="page-four__textarea__list__item__title">
                Total Supply
              </div>
            </li>
            <li className="page-four__textarea__list__item">
              <div className="page-four__textarea__list__item__number">200</div>
              <hr className="page-four__textarea__list__item__hr" />
              <div className="page-four__textarea__list__item__title">SALE</div>
            </li>
            <li className="page-four__textarea__list__item">
              <div className="page-four__textarea__list__item__number">
                1,400
              </div>
              <hr className="page-four__textarea__list__item__hr" />
              <div className="page-four__textarea__list__item__title">
                PAYMENT, RESERVE
              </div>
            </li>
            <li className="page-four__textarea__list__item">
              <div className="page-four__textarea__list__item__number">200</div>
              <hr className="page-four__textarea__list__item__hr" />
              <div className="page-four__textarea__list__item__title">
                MARKETING
              </div>
            </li>
            <li className="page-four__textarea__list__item">
              <div className="page-four__textarea__list__item__number">200</div>
              <hr className="page-four__textarea__list__item__hr" />
              <div className="page-four__textarea__list__item__title">
                TEAM, ADVISOR
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* page 5 */}
      <section className="page-five">
        <div className="page-five__contain">
          <div className="page-five__contain__menu">INDUSTRY</div>
          <div className="page-five__contain__title">
            Our
            <br />
            Partners
          </div>
          <div className="page-five__contain__text">
            It has a close agreement with a kiosk manufacturer, an unmanned
            convenience store terminal. In addition, many small business owners
            and distributors are participating as partners to build
            V-infrastructure. successful business
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Page;
