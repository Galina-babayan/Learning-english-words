import "./WordCard.scss";
import MainButton from "../MainButton/MainButton";

import iconRight from "../../images/iconRight.png";
import { useEffect, useState, useRef } from "react";

export default function WordCard(props) {
  let { meaning, en, tr, ru, id, onCheckWordClicked } = props;
  const [isChecked, changeChecked] = useState(false);
  const a = useRef(null);

  function onClick(e) {
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
    a.current.focus();
    props.nextCard();
  }

  return (
    <div className="cards__item-change">
      {!isChecked && (
        <div className="cards__item-front">
          <p className="cards__item-title">Question</p>
          <div className="cards__item-text">{meaning}</div>
          <MainButton funcClick={onClick} text="Проверить" a={a} />
        </div>
      )}
      {isChecked && (
        <div className="cards__item-back">
          <div className="cards__item-en">{en}</div>
          <div className="cards__item-wrapper">
            <div className="cards__item-tr">{tr}</div>
            <div className="cards__item-ru">{ru}</div>
          </div>
          <MainButton funcClick={getBack} text="Обратно" a={a} />
        </div>
      )}

      <div onClick={next} className="cards__item-sign">
        <img src={iconRight} alt="" />
      </div>
    </div>
  );
}
