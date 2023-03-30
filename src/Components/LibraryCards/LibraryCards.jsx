import "./LibraryCards.scss";
import MainButton from "../MainButton/MainButton";
import cN from "classnames";

export default function LibraryCards(props) {
  let { topic, number, color, url } = props;
  return (
    <div className="library__column">
      <article className={cN([`library-item ` + `${color}`])}>
        <div className="library-item__image">
          <img src={url} alt="" />
        </div>
        <div className="library-item__body">
          <p className="library-item__info">{topic}</p>
          <div className="library-item__content">
            <h4 className="library-item__number">Количество карточек</h4>
            <h4 className="library-item__number">{number}</h4>
          </div>
          <MainButton text="Подробнее" />
        </div>
      </article>
    </div>
  );
}
