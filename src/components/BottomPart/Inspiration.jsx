import React from "react";
import Image10 from "../../assets/image10.JPG";
import { ReactComponent as RecordIcon } from "../../assets/record.svg";

const Inspiration = () => {
  const listItems = [
    "changes that affect the public",
    "traffic and dashbcam footage",
    "act of kindness",
    "places worth visiting",
    "crime",
    "demonstrations",
    "environmental concerns",
    "social injustice and prejudice",
    "new construction",
    "unexpected encounters",
  ];
  return (
    <div className="inspiration max-width">
        <h2 className="inspiration__headline">Watch similar videos compilation</h2>
        <div className="inspiration__list-wrapper">
          <p>Need inspiration? See ideas below:</p>
          <ul className="inspiration__list">
            {listItems.map((item, index) => {
              return (
                <li key={index} className="inspiration__list-item">
                  <div className="inspiration__record-icon">
                    <RecordIcon />
                  </div>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      <div className="inspiration__promotion-video">
        <img
          src={Image10}
          alt="video thumbnail"
          className="inspiration__promotion-thumbnail"
        />
      </div>
    </div>
  );
};

export default Inspiration;
