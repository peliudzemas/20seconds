import React from "react";
import Divider from "./Divider";
import AppStore from "../../assets/appstore.png";
import GooglePlay from "../../assets/googleplay.png";

const Instructions = ({ headlineRef, scrollHandleMainPrize }) => {
  return (
    <div className="instructions max-width" ref={headlineRef}>
      <h2 className="instructions__headline">How to participate?</h2>
      <div className="instructions__items">
        <div className="instructions__item">
          <h1 className="instructions__number">
            <span className="span--red">1.</span>
          </h1>
          <div className="instructions__text">
            <p>Create account</p>
          </div>
          <Divider height="2px" width="100%" />
          <div className="instructions__sub-text">
            <p className="instructions__cta-text left-top">
              Start by joining us
            </p>
            <a
              href="#"
              className="instructions__create-account buttons__main-button buttons__button right-top"
            >
              CREATE ACCOUNT
            </a>
            <p className="instructions__cta-text left-bottom">
              Already have an account?
            </p>
            <a
              href="#"
              className="instructions__sign-in buttons__sub-button buttons__button right-bottom"
            >
              SIGN IN
            </a>
          </div>
        </div>
        <div className="instructions__item">
          <h1 className="instructions__number">
            <span className="span--red">2.</span>
          </h1>
          <div className="instructions__text">
            <p>Record and upload video</p>
          </div>
          <Divider height="2px" width="100%" />
          <div className="instructions__sub-text">
            <p className="instructions__cta-text left-top">
              Content should be at least 20 seconds and up to 60 for submission
            </p>
            <p className="instructions__cta-text instructions__cta-text--large right-top">
              <span className="span--red">20sec +</span>
            </p>
            <p className="instructions__cta-text left-bottom">
              You can upload using website our our app
            </p>
            <div className="instructions__apps right-bottom">
              <a href="https://apps.apple.com/us/app/mypoint-tv/id1529489827">
                <img
                  src={AppStore}
                  alt="app store download"
                  className="instructions__app-link"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=tv.mypoint.creator.android">
                <img
                  src={GooglePlay}
                  alt="Google Play download"
                  className="instructions__app-link"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="instructions__item">
          <h1 className="instructions__number">
            <span className="span--red">3.</span>
          </h1>
          <div className="instructions__text">
            <p>Get $20</p>
          </div>
          <Divider height="2px" width="100%" />
          <div className="instructions__sub-text">
            <p className="instructions__cta-text left-top">
              Approved contributions receive $20 once published
            </p>
            <p className="instructions__cta-text right-top instructions__main-prize-text">
              Every video also enter the pool to win
              <span class="span--red"> $500</span>
            </p>
            <button
              type="button"
              onClick={scrollHandleMainPrize}
              className="instructions__cta-text instructions__main-prize right-bottom"
            >
              READ MORE ABOUT $500 PRIZE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
