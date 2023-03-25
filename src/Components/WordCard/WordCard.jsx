import "./WordCard.css";
import MainButton from "../MainButton/MainButton";

export default function WordCard(props) {
  let { meaning, en } = props;
  return (
    <div className="cards__item-change">
      <div className="cards__item-front">
        <p className="cards__item-title">Question</p>
        <div className="cards__item-text">{meaning}</div>
        <MainButton text="Проверить" />
      </div>
      <div className="cards__item-back">{en}</div>
    </div>
  );
}
