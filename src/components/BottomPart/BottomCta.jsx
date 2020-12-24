import React from "react";
import { ReactComponent as RecordIcon } from "../../assets/record.svg";
import AppStore from "../../assets/appstore.png";
import GooglePlay from "../../assets/googleplay.png";

const BottomCta = () => {
  return (
    <div className="bottom-cta">
      <div className="bottom-cta__headline-wrapper">
        <h1 className="bottom-cta__headline">what are you waiting for?</h1>
      </div>
      <div className="bottom-cta__content-wrapper">
        <div className="bottom-cta__text">
          <span className="span--regular">shoot</span>
          <div className="bottom-cta__record-icon">
            <RecordIcon />
          </div>
          <span className="span--regular">upload</span>
          <div className="bottom-cta__record-icon">
            <RecordIcon />
          </div>
          <span className="span--red">get paid</span>
        </div>
        <div className="bottom-cta__buttons">
          <a
            href="#"
            className="bottom-cta__create-account buttons__main-button buttons__button right-top"
          >
            CREATE ACCOUNT
          </a>
          <a
            href="#"
            className="bottom-cta__sign-in buttons__sub-button buttons__button right-bottom"
          >
            SIGN IN
          </a>
        </div>
        <div className="bottom-cta__apps">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/mypoint-tv/id1529489827"
          >
            <img
              src={AppStore}
              alt="app store download"
              className="bottom-cta__app-link"
            />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=tv.mypoint.creator.android"
          >
            <img
              src={GooglePlay}
              alt="Google Play download"
              className="bottom-cta__app-link"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomCta;
