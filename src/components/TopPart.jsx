import React from "react";
import "./top-part.scss";
import Image01 from "../assets/image01.jpg";
import Image02 from "../assets/image02.jpg";
import Image03 from "../assets/image03.jpg";
import Image04 from "../assets/image04.jpg";
import Image05 from "../assets/image05.jpg";
import Image06 from "../assets/image06.jpg";
import Image07 from "../assets/image07.jpg";
import Image08 from "../assets/image08.jpg";
import Image09 from "../assets/image09.jpg";
import { ReactComponent as RecordIcon } from "../assets/record.svg";

const TopPart = (props) => {
  const allInfo = {
    grid: [
      { image: Image01, className: "one" },
      { image: Image02, className: "two" },
      { image: Image03, className: "three" },
      { image: Image04, className: "four" },
      { image: Image05, className: "five" },
      { image: Image06, className: "six" },
      { image: Image07, className: "seven" },
      { image: Image08, className: "eight" },
      { image: Image09, className: "nine" },
    ],
  };

  return (
    <div>
      <div className="top-grid">
        {allInfo.grid.map((gridItem, index) => {
          return (
            <div className={`grid grid__item-${gridItem.className}`}>
              <img
                src={gridItem.image}
                alt=""
                className={`image image__image-${gridItem.className} grid-item`}
              />
            </div>
          );
        })}
        <div className="headlines">
          <h1 className="headlines__main-headline">
            <span className="span--red">20</span>seconds
          </h1>
          <h2 className="headlines__sub-headline">
            Get
            <span className="span--red"> $20</span> and win{" "}
            <span className="span--red">$500</span> more!
          </h2>
        </div>
        <div className="cta">
          <div className="cta__text">
            <span className="span--regular">shoot</span>
            <div className="cta__record-icon">
              <RecordIcon />
            </div>
            <span className="span--regular">upload</span>
            <div className="cta__record-icon">
              <RecordIcon />
            </div>
            <span className="span--red">Get paid</span>
          </div>
          <div className="cta__buttons">
            <button
              className="buttons__main-button buttons__button cta__read-more"
              onClick={props.executeScroll}
            >
              read more
            </button>
            <a
              href=""
              className="buttons__sub-button buttons__button cta__watch-videos"
            >
              Watch videos
            </a>
          </div>
        </div>
        {/* <div className="disclaimer">
          <p className="disclaimer__text">
            * Each person who submits a video receives $20 if it gets published
            and enters the pool to win $500. Additional terms and conditions
            apply
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TopPart;
