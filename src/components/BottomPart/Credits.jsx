import React from "react";

const Credits = () => {
  return (
    <div className="credits max-width">
      <h1 className="credits__headline">Who are we?</h1>
      <div className="credits__grid">
        <div className="credits__item">
          <div className="credits__item-head">
            <div className="credits__head-number">30+</div>
            <div className="credits__head-text">cities</div>
          </div>
          <div className="credits__sub-heading">Around the world</div>
          <p className="credits__text">
            By contributing your content, you become part of a growing global
            community with videos submitted from across the United States,
            France, Egypt, Indonesia, Belarus and the United Kingdom and more!
          </p>
        </div>
        <div className="credits__item">
          <div className="credits__item-head">
            <div className="credits__head-number">60+</div>
            <div className="credits__head-text">contributors</div>
          </div>
          <div className="credits__sub-heading">In our growing community</div>
          <div className="credits__text">
            <p className="credits__text-paragraph">
              We value our collaborations and empower our contributors to share
              their work with a broader audience. Fox7Austin and KENS 5 recently
              featured our initiative to raise awareness about homelessness in
              Austin.
            </p>{" "}
            <p className="credits__text-paragraph">
              Read more about the collaboration with non-profit organization
              HomeAid Austin and local contributor Ruben Grafe:{" "}
              <a href="#" className="link link--underline credits__link">
                Read more
              </a>
            </p>
          </div>
        </div>
        <div className="credits__item">
          <div className="credits__item-head">
            <div className="credits__head-number">130+</div>
            <div className="credits__head-text">stories</div>
          </div>
          <div className="credits__sub-heading">
            Featuring contributors and experts
          </div>
          <p className="credits__text">
            Among the experts, Former Education Secretary Margaret Spellings,
            Hollywood Stunt Pilot Robin Petgrave, health experts Dr. John Carlo,
            member of Texas Medical Association COVID 19 Task Force, and Dr.
            Fred Campbell, Associate Professor of Medicine at UT Health San
            Antonio, diversity and inclusion advocate, HR expert Angela L. Shaw,
            UK journalist and writer Bibi Lynch and more.
          </p>
        </div>
      </div>
      <div className="credits__cta">
        <div className="credits__cta-headline">join our community</div>
        <a
          href="#"
          className="credits__create-account buttons__main-button buttons__button"
        >
          CREATE ACCOUNT
        </a>
        <div>
          <a href="#" className="link link--underline">
            Sign in instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default Credits;
