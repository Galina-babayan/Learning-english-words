import "./PageLibrary.scss";
import "../../Components/LibraryCards/LibraryCards.scss";

import LibraryCards from "../../Components/LibraryCards/LibraryCards";

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

import Json from "../../Components/utils/Json.js";

let words = JSON.parse(Json);

let werbs = words.filter((item) => item.tags === `глаголы`);

let professions = words.filter((item) => item.tags === `профессия`);

let kitchen = words.filter((item) => item.tags === `кухонные принадлежности`);

let transport = words.filter((item) => item.tags === `транспорт`);

let clothes = words.filter((item) => item.tags === `одежда`);

let animals = words.filter((item) => item.tags === `животные`);

let plants = words.filter((item) => item.tags === `съедобные растения`);

let feelings = words.filter((item) => item.tags === `чувства`);

let colors = words.filter((item) => item.tags === `цвета`);

let sea = words.filter((item) => item.tags === `морская тема`);

export default function PageLibrary() {
  if (words) {
    return (
      <section className="library">
        <div className="library container">
          <div className="library__top">
            <div className="main__title">Библиотека карточек</div>
          </div>
          <div className="library__body">
            <LibraryCards
              kay={1}
              topic="Глаголы"
              number={werbs.length}
              color="first"
              url={werbsImg}
            />
            <LibraryCards
              kay={2}
              topic="Профессии"
              number={professions.length}
              color="second"
              url={professionsImg}
            />
            <LibraryCards
              kay={3}
              topic="Кухня"
              number={kitchen.length}
              color="therd"
              url={kitchenImg}
            />
            <LibraryCards
              kay={4}
              topic="Транспорт"
              number={transport.length}
              color="fourth"
              url={transportImg}
            />
            <LibraryCards
              kay={5}
              topic="Одежда"
              number={clothes.length}
              color="first"
              url={clothesImg}
            />
            <LibraryCards
              kay={6}
              topic="Животные"
              number={animals.length}
              color="second"
              url={animalsImg}
            />
            <LibraryCards
              kay={7}
              topic="Съедобные растения"
              number={plants.length}
              color="therd"
              url={plantsImg}
            />
            <LibraryCards
              kay={8}
              topic="Чувства"
              number={feelings.length}
              color="fourth"
              url={feelingsImg}
            />
            <LibraryCards
              kay={9}
              topic="Цвета"
              number={colors.length}
              color="first"
              url={colorsImg}
            />
            <LibraryCards
              kay={10}
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
  return "LOADING";
}
