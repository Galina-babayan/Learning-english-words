import "./PageCards.scss";

import CardsTopics from "../../Components/CardsTopics/CardsTopics";
import WordCard from "../../Components/WordCard/WordCard";

import MainButton from "../../Components/MainButton/MainButton";

import Json from "../../Components/utils/Json.js";
import { useState } from "react";

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

export default function PageCards() {
  const [cardIndex, setCardIndex] = useState(0);
  let [cardTopic, setCardTopic] = useState(null);
  const [isStart, setIsStart] = useState(false);
  const [isCheckedWords, setIsCheckedWords] = useState(0);

  function onCheckWordClicked() {
    setIsCheckedWords(isCheckedWords + 1);
  }

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
                      <div className="cards__item-tr">Выбери тему:</div>
                    </div>
                  )}
                  {isStart && cardIndex < cardTopic.length && (
                    <>
                      <WordCard
                        {...cardTopic[cardIndex]}
                        nextCard={nextCard}
                        onCheckWordClicked={onCheckWordClicked}
                      />
                      {cardIndex + 1} / {cardTopic.length}
                    </>
                  )}
                  {isStart && cardIndex === cardTopic.length && (
                    <>
                      <div>
                        Вы проверили {isCheckedWords} из {cardTopic.length}{" "}
                        слов.
                      </div>
                      <div className="cards__item-back">
                        <div className="cards__item-en">Конец!</div>
                        <div className="cards__item-tr">
                          Вы знаете{" "}
                          {Math.floor(
                            (isCheckedWords / cardTopic.length) * 100
                          )}{" "}
                          % слов!
                        </div>
                        <div className="cards__item-ru">
                          <p> Хотите попробовать</p>
                          <p>еше раз?</p>
                        </div>
                        <MainButton funcClick={startAgain} text="Начать" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return "LOADING";
}
