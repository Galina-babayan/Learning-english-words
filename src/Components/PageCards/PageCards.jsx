import "./PageCards.scss";

import CardsTopics from "../CardsTopics/CardsTopics";
import WordCard from "../WordCard/WordCard";
//import CardsFooter from "../CardsFooter/CardsFooter";
import MainButton from "../MainButton/MainButton";

import Json from "../utils/Json.js";
import { useState } from "react";

let words = JSON.parse(Json);

let werbs = words.filter((item) => item.subject === `глаголы`);

let professions = words.filter((item) => item.subject === `профессия`);

let kitchen = words.filter(
  (item) => item.subject === `кухонные принадлежности`
);

let transport = words.filter((item) => item.subject === `транспорт`);

let clothes = words.filter((item) => item.subject === `одежда`);

let animals = words.filter((item) => item.subject === `животные`);

let plants = words.filter((item) => item.subject === `съедобные растения`);

let feelings = words.filter((item) => item.subject === `чувства`);

let colors = words.filter((item) => item.subject === `цвета`);

let sea = words.filter((item) => item.subject === `морская тема`);

export default function PageCards() {
  const [cardIndex, setCardIndex] = useState(0);
  let [cardTopic, setCardTopic] = useState(null);
  const [isStart, setIsStart] = useState(false);

  function nextCard() {
    setCardIndex(cardIndex + 1);
  }

  function startAgain() {
    setIsStart(false);
    setCardIndex(0);
  }

  function onClickWerbs() {
    setCardTopic(werbs);
    setIsStart(true);
  }

  function onClickProfessions() {
    setCardTopic(professions);
    setIsStart(true);
  }

  function onClickKitchen() {
    setCardTopic(kitchen);
    setIsStart(true);
  }

  function onClickTransport() {
    setCardTopic(transport);
    setIsStart(true);
  }

  function onClickClothes() {
    setCardTopic(clothes);
    setIsStart(true);
  }

  function onClickAnimals() {
    setCardTopic(animals);
    setIsStart(true);
  }

  function onClickPlants() {
    setCardTopic(plants);
    setIsStart(true);
  }

  function onClickFeelings() {
    setCardTopic(feelings);
    setIsStart(true);
  }

  function onClickColors() {
    setCardTopic(colors);
    setIsStart(true);
  }

  function onClickSea() {
    setCardTopic(sea);
    setIsStart(true);
  }

  if (words) {
    return (
      <section className="cards">
        <div className="cards__container container">
          <div className="main__title">Карточки</div>
          <div className="cards__body">
            <div className="cards__item">
              <div className="cards__item-body">
                <div className="cards__game">
                  <CardsTopics
                    onClickWerbs={onClickWerbs}
                    onClickProfessions={onClickProfessions}
                    onClickKitchen={onClickKitchen}
                    onClickTransport={onClickTransport}
                    onClickClothes={onClickClothes}
                    onClickAnimals={onClickAnimals}
                    onClickPlants={onClickPlants}
                    onClickFeelings={onClickFeelings}
                    onClickColors={onClickColors}
                    onClickSea={onClickSea}
                  />
                  {!isStart && (
                    <div className="cards__item-back">
                      <div className="cards__item-en">Проверь себя!</div>
                      <div className="cards__item-tr">Выбери тему</div>
                    </div>
                  )}
                  {isStart && cardIndex < cardTopic.length && (
                    <>
                      <WordCard {...cardTopic[cardIndex]} nextCard={nextCard} />
                      {cardIndex + 1} / {cardTopic.length}
                    </>
                  )}
                  {isStart && cardIndex === cardTopic.length && (
                    <div className="cards__item-back">
                      <div className="cards__item-en">Конец!</div>
                      <div className="cards__item-tr">Вы знаете n% слов!</div>
                      <div className="cards__item-ru">
                        <p> Хотите попробовать</p>
                        <p>еше раз?</p>
                      </div>
                      <MainButton funcClick={startAgain} text="Начать" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* <div className="cards__row">
            <CardsFooter textButton="Не знаю" textLink="Попробовать еще" />
            <CardsFooter textButton="Карточки" textLink="Перемешать" />
            <CardsFooter textButton="Знаю" textLink="Начать заново" />
          </div> */}
          </div>
        </div>
      </section>
    );
  }
  return "LOADING";
}
