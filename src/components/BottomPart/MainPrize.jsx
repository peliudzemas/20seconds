import React from "react";
import { ReactComponent as CheckDoubleIcon } from "../../assets/checkDoubleIcon.svg";
import { ReactComponent as UsersIcon } from "../../assets/usersIcon.svg";
import { ReactComponent as PlayIcon } from "../../assets/playIcon.svg";
import { ReactComponent as DollarIcon } from "../../assets/dollarIcon.svg";

const MainPrize = ({ mainPrizeRef }) => {
  const itemsList = [
    {
      icon: <DollarIcon />,
      text:
        "All contributors of approved and published videos will receive $20",
    },
    {
      icon: <PlayIcon />,
      text: "Additionally, our editors will pick 3 best videos",
    },
    {
      icon: <UsersIcon />,
      text: "The authors of these 3 videos will each get $500",
    },
    {
      icon: <CheckDoubleIcon />,
      text: "All approved and published videos are eligible for the prize",
    },
  ];
  return (
    <div className="main-prize" ref={mainPrizeRef} id="main-prize">
      <div className="main-prize__items-wrapper max-width">
        {itemsList.map((item, index) => {
          return (
            <div className="main-prize__item" key={index}>
              <div className="main-prize__icon-wrapper">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
      <div className="main-prize__cta-headline">
        start by creating an account
      </div>
      <a
        href="#"
        className="main-prize__create-account buttons__main-button buttons__button"
      >
        CREATE ACCOUNT
      </a>
      <div>
        <a href="#" className="link link--underline">
          Sign in instead
        </a>
      </div>
    </div>
  );
};

export default MainPrize;
