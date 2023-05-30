import "./WordCard.scss";
import MainButton from "../MainButton/MainButton";

import iconRight from "../../images/iconRight.png";
import { useEffect, useState, useRef } from "react";

export default function WordCard(props) {
  let { english, transcription, russian, id, onCheckWordClicked, tags } = props;
  const [isChecked, changeChecked] = useState(false);
  const focusButton = useRef(null);

  function onClick() {
    changeChecked(true);
    onCheckWordClicked();
  }

  useEffect(() => {
    changeChecked(false);
  }, [id]);

  function getBack() {
    changeChecked(false);
  }

  function next() {
    focusButton.current.focus();
    props.nextCard();
  }

  return (
    <div className="cards__item-change">
      {!isChecked && (
        <div className="cards__item-front">
          <p className="cards__item-title">Question</p>
          <div className="cards__item-text">{english}</div>
          <MainButton
            funcClick={onClick}
            text="Проверить"
            focusButton={focusButton}
          />
        </div>
      )}
      {isChecked && (
        <div className="cards__item-back">
          <div className="cards__item-en">{russian}</div>
          <div className="cards__item-wrapper">
            <div className="cards__item-tr">{transcription}</div>
            <div className="cards__item-ru">{tags}</div>
          </div>
          <MainButton
            funcClick={getBack}
            text="Обратно"
            focusButton={focusButton}
          />
        </div>
      )}

      <div onClick={next} className="cards__item-sign">
        <img src={iconRight} alt="" />
      </div>
    </div>
  );
}
