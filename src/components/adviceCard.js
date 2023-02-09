import React from "react";
import { PrimaryButton } from "./primaryButton";
import "../styling/adviceCard.css";
import DesktopDivider from '../assets/pattern-divider-desktop.svg';
import MobileDivider from '../assets/pattern-divider-mobile.svg';

export const AdviceCard = ({ adviceText, adviceId, getAdviceFunc }) => {
  return (
    <div className="advice-card_container">
      <div className="advice-card_header">
        <p>ADVICE #{adviceId}</p>
      </div>
      <div className="advice-card_para">
        <p>"{adviceText}"</p>
      </div>
      <div className="advice-card_divider">
        <img src={window.innerWidth < 450 ? MobileDivider : DesktopDivider} alt="" />
      </div>
      <div className="advice-card_button">
        <PrimaryButton getAdviceFunc={getAdviceFunc} />
      </div>
    </div>
  );
};
