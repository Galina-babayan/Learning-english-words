import "./PageLibrary.css";
import "../LibraryCards/LibraryCards.css";

import MainButton from "../MainButton/MainButton";
import LibraryCards from "../LibraryCards/LibraryCards";

import werbsImg from "../../images/werbsImg.jpeg";
import professionsImg from "../../images/professionsImg.jpg";
import animalsImg from "../../images/animalsImg.jpeg";
import colorsImg from "../../images/colorsImg.jpg";
import feelingsImg from "../../images/feelingsImg.jpg";
import kitchenImg from "../../images/kitchenImg.jpg";
import plantsImg from "../../images/plantsImg.jpg";
import seaImg from "../../images/seaImg.jpg";
import transportImg from "../../images/transportImg.jpg";
import clothesImg from "../../images/clothesImg.jpg";

import Json from "../Json/Json";

let words = JSON.parse(Json);

let werbs = words.filter((item) => item.subject === `глаголы`);

console.log(werbs.length);

let professions = words.filter(function (item) {
  return item.subject === `профессия`;
});

let kitchen = words.filter(function (item) {
  return item.subject === `кухонные принадлежности`;
});

let transport = words.filter(function (item) {
  return item.subject === `транспорт`;
});

let clothes = words.filter(function (item) {
  return item.subject === `одежда`;
});

let animals = words.filter(function (item) {
  return item.subject === `животные`;
});

let plants = words.filter(function (item) {
  return item.subject === `съедобные растения`;
});

let feelings = words.filter(function (item) {
  return item.subject === `чувства`;
});

let colors = words.filter(function (item) {
  return item.subject === `цвета`;
});

let sea = words.filter(function (item) {
  return item.subject === `морская тема`;
});

export default function PageLibrary() {
  return (
    <section className="library">
      <div className="library container">
        <div className="library__top">
          <div className="main__title">Библиотека карточек</div>
          <MainButton text="Добавить карточку" />
        </div>
        <div className="library__body">
          <LibraryCards
            topic="Глаголы"
            number={werbs.length}
            color="first"
            url={werbsImg}
          />
          <LibraryCards
            topic="Профессии"
            number={professions.length}
            color="second"
            url={professionsImg}
          />
          <LibraryCards
            topic="Кухня"
            number={kitchen.length}
            color="therd"
            url={kitchenImg}
          />
          <LibraryCards
            topic="Транспорт"
            number={transport.length}
            color="fourth"
            url={transportImg}
          />
          <LibraryCards
            topic="Одежда"
            number={clothes.length}
            color="first"
            url={clothesImg}
          />
          <LibraryCards
            topic="Животные"
            number={animals.length}
            color="second"
            url={animalsImg}
          />
          <LibraryCards
            topic="Съедобные растения"
            number={plants.length}
            color="therd"
            url={plantsImg}
          />
          <LibraryCards
            topic="Чувства"
            number={feelings.length}
            color="fourth"
            url={feelingsImg}
          />
          <LibraryCards
            topic="Цвета"
            number={colors.length}
            color="first"
            url={colorsImg}
          />
          <LibraryCards
            topic="Море"
            number={sea.length}
            color="second"
            url={seaImg}
          />
        </div>
      </div>
    </section>
  );
}
