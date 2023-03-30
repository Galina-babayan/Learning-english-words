import "./WordCard.scss";
import MainButton from "../MainButton/MainButton";
import iconLeft from "../../images/iconLeft.png";
import iconRight from "../../images/iconRight.png";
import { useState } from "react";

export default function WordCard(props) {
  let { meaning, en, tr, ru } = props;
  const [isChecked, changeChecked] = useState(false);

  function onClick() {
    changeChecked(true);
  }

  return (
    <div className="cards__item-change">
      <div className="cards__item-sign">
        <img src={iconLeft} alt="" />
      </div>
      {!isChecked && (
        <div className="cards__item-front">
          <p className="cards__item-title">Question</p>
          <div className="cards__item-text">{meaning}</div>
          <MainButton funcClick={onClick} text="Проверить" />
        </div>
      )}
      {isChecked && (
        <div className="cards__item-back">
          <div className="cards__item-en">{en}</div>
          <div className="cards__item-tr">{tr}</div>
          <div className="cards__item-ru">{ru}</div>
        </div>
      )}

      <div className="cards__item-sign">
        <img src={iconRight} alt="" />
      </div>
    </div>
  );
}
