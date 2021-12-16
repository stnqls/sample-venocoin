import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="inner">
        <h1 className="footer__title">VENOCOIN</h1>
        <span className="footer__email">help@venocoin.io</span>
        <ul className="footer__sns">
          <li className="footer__sns__item">
            <img
              src="/images/kakaotalk_icon.webp"
              alt=""
              className="footer__sns__item__kakao"
            />
            <img
              src="/images/telegram_icon.webp"
              alt=""
              className="footer__sns__item__telegram"
            />
          </li>
        </ul>
        <span className="footer__copyright">
          Copyright ⓒ 2021 VENOCOIN All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
