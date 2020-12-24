import React from "react";

const Information = () => {
  return (
    <div className="information max-width">
      <div className="information__description">
        <h3 className="information__headline">
          Why <span className="span--red">20 Seconds</span>?
        </h3>
        <p className="information__text">
          In our fast-moving world, something newsworthy happens all the time -
          we invite you to capture it. MyPoint.tv will gather these moments in a
          socially-empowered video platform. You will get a reward for your
          footage while viewers will enjoy unique and informational video
          content.
        </p>
      </div>
      <div className="information__terms">
        As operators of this site, we take the protection of your personal
        information very seriously. We use your data strictly for specific
        purposes described in our{" "}
        <a href="https://mypointtv.zendesk.com/hc/en-us" className="link" target="_blank">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
};

export default Information;
