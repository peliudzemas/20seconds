import React from "react";
import BottomCta from "./BottomCta";
import Instructions from "./Instructions";
import MainPrize from "./MainPrize";
import Credits from "./Credits";
import Information from "./Information";
import "./bottom-part.scss";
import Inspiration from "./Inspiration";

const BottomPart = ({ headlineRef, mainPrizeRef, scrollHandleMainPrize }) => {
  return (
    <div className="bottom-grid">
      <Instructions
        headlineRef={headlineRef}
        scrollHandleMainPrize={scrollHandleMainPrize}
      />
      <Inspiration />
      <MainPrize mainPrizeRef={mainPrizeRef} />
      <Credits />
      <BottomCta />
      <Information />
    </div>
  );
};

export default BottomPart;
