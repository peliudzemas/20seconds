import React, { useRef } from "react";
import TopPart from "./TopPart";
import "./landing-page.scss";
import BottomPart from "./BottomPart/BottomPart";

const LandingPage = () => {
  const headlineRef = useRef(null);
  const mainPrizeRef = useRef(null);

  const executeScrollToHeadline = () =>
    headlineRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScrolltoMainPrize = () =>
    mainPrizeRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="landing">
      <div className="header">HEADER</div>
      <TopPart executeScroll={executeScrollToHeadline} />
      <BottomPart
        headlineRef={headlineRef}
        mainPrizeRef={mainPrizeRef}
        scrollHandleMainPrize={executeScrolltoMainPrize}
      />
      <div className="header">FOOTER</div>
    </div>
  );
};

export default LandingPage;
