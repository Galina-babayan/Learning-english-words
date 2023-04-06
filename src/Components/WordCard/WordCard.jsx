import "./WordCard.scss";
import MainButton from "../MainButton/MainButton";

import iconRight from "../../images/iconRight.png";
import { useState } from "react";

export default function WordCard(props) {
  let { meaning, en, tr, ru } = props;
  const [isChecked, changeChecked] = useState(false);

  function onClick() {
    changeChecked(true);
  }

  function getBack() {
    changeChecked(false);
  }

  return (
    <div className="cards__item-change">
      {!isChecked && (
        <div className="cards__item-front">
          <p className="cards__item-title">Question</p>
          <div className="cards__item-text">{meaning}</div>
          <MainButton funcClick={onClick} text="Проверить" />
        </div>
      )}
      {isChecked && (
        <div onClick={getBack} className="cards__item-back">
          <div className="cards__item-en">{en}</div>
          <div className="cards__item-tr">{tr}</div>
          <div className="cards__item-ru">{ru}</div>
        </div>
      )}

      <div onClick={props.nextCard} className="cards__item-sign">
        <img src={iconRight} alt="" />
      </div>
    </div>
  );
}
