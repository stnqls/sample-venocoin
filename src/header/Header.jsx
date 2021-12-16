import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="inner">
        <div className="header__logo">
          <img
            src="/images/logo.webp"
            alt="logoimg"
            className="header__logo__img"
          />
          <span className="header__logo__title">
            <span className="header__logo__title__color">V</span>ENOCOIN
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
