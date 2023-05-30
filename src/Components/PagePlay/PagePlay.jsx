import "./PagePlay.scss";

import CardsTopics from "../CardsTopics/CardsTopics";
import MainButton from "../MainButton/MainButton";

import Json from "../utils/Json.js";
import { useEffect, useState } from "react";

let words = JSON.parse(Json);

let werbs = words.filter((item) => item.tags === `глаголы`);

let professions = words.filter((item) => item.tags === `профессия`);

let kitchen = words.filter(
  (item) => item.tags === `кухонные принадлежности`
);

let transport = words.filter((item) => item.tags === `транспорт`);

let clothes = words.filter((item) => item.tags === `одежда`);

let animals = words.filter((item) => item.tags === `животные`);

let plants = words.filter((item) => item.tags === `съедобные растения`);

let feelings = words.filter((item) => item.tags === `чувства`);

let colors = words.filter((item) => item.tags === `цвета`);

let sea = words.filter((item) => item.tags === `морская тема`);

export default function Play() {
  const [arrayCards, setArrayCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  let [cardTopic, setCardTopic] = useState([]);
  const [isStart, setIsStart] = useState(false);

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

  const pairOfArrayCards = [...cardTopic, ...cardTopic];

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  useEffect(() => {
    setArrayCards(shuffle(pairOfArrayCards));
  }, [cardTopic]);

  const flipCard = (index) => () => {
    setOpenedCards((opened) => [...opened, index]);
    console.log(openedCards);
    setMoves(moves + 1);
  };

  useEffect(() => {
    if (openedCards < 2) return;
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
      console.log(matched);
    }

    if (openedCards.length === 2) setTimeout(() => setOpenedCards([]), 1000);
  }, [openedCards]);

  const restart = () => {
    setArrayCards(shuffle(pairOfArrayCards));
    setOpenedCards([]);
    setMatched([]);
    setMoves(0);
    setIsStart(false);
  };
  let frontSideCards = [];
  return (
    <section className="cards">
      <div className="cards__container container">
        <div className="main__title">Угадай пару</div>

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
            <div className="cards__item-top">
              <div className="cards__item-play-en">Проверь себя!</div>
              <div className="cards__item-tr">Выбери тему</div>
            </div>
          )}
          {isStart && (
            <>
              <div className="main__title">Сделано ходов: {moves}</div>

              <MainButton funcClick={restart} text="Начать заново" />
              <div>
                {matched.length * 2 === arrayCards.length && (
                  <div className="main__title">
                    Поздравляю! Вы нашли все пары!
                  </div>
                )}
                <div className="cards__wrapper">
                  <div className="cards__play">
                    {arrayCards.map((item, index) => {
                      let isFlipped = false;
                      if (openedCards.includes(index)) isFlipped = true;
                      if (matched.includes(item.id)) isFlipped = true;

                      let opened = false;
                      if (openedCards.includes(index)) opened = true;
                      if (matched.includes(item.id)) opened = true;

                      if (!frontSideCards.includes(item)) {
                        frontSideCards.push(item);
                        return (
                          <div
                            key={index}
                            className={`cards__item-play-change ${
                              isFlipped ? "flipped" : ""
                            }`}
                            onClick={flipCard(index)}
                          >
                            <div className="inner">
                              <div
                                className={`cards__item-play-front ${
                                  opened ? "opened" : ""
                                }`}
                              >
                                <div className="cards__item-play-text">
                                  {item.russian}
                                </div>
                              </div>
                              <div
                                className={`cards__item-play-back ${
                                  opened ? "opened" : ""
                                }`}
                              >
                                <div className="cards__item-play-en">
                                  {item.english}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      } else
                        return (
                          <div
                            key={index}
                            className={`cards__item-play-change ${
                              isFlipped ? "flipped" : ""
                            }`}
                            onClick={flipCard(index)}
                          >
                            <div className="inner">
                              <div
                                className={`cards__item-play-front ${
                                  opened ? "opened" : ""
                                }`}
                              >
                                <div className="cards__item-play-en">
                                  {item.english}
                                </div>
                              </div>
                              <div
                                className={`cards__item-play-back ${
                                  opened ? "opened" : ""
                                }`}
                              >
                                <div className="cards__item-play-text">
                                  {item.russian}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
