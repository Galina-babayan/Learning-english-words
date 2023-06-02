import "./PagePlay.scss";

import CardsTopics from "../../Components/CardsTopics/CardsTopics";

import MainButton from "../../Components/MainButton/MainButton";

import { useEffect, useState, useContext } from "react";
import { WordsContext } from "../../context/Context";

export default function Play() {
  const context = useContext(WordsContext);
  const words = context.words;
  let werbs = words.filter((item) => item.tags === `глагол`);
  let all = words;

  let animals = words.filter((item) => item.tags === `животные`);
  let feelings = words.filter((item) => item.tags === `состояние`);
  let building = words.filter((item) => item.tags === `строительство`);
  let money = words.filter((item) => item.tags === `деньги`);
  let noun = words.filter((item) => item.tags === `существительное`);
  let conjunction = words.filter((item) => item.tags === `союз`);
  let travel = words.filter((item) => item.tags === `путешествие`);
  let hi = words.filter((item) => item.tags === `приветствие`);
  let adverb = words.filter((item) => item.tags === `наречие`);
  let pronoun = words.filter((item) => item.tags === `местоимение`);
  let adjective = words.filter((item) => item.tags === `прилагательное`);

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

  function onClickAnimals() {
    setCardTopic(animals);
    setIsStart(true);
  }

  function onClickFeelings() {
    setCardTopic(feelings);
    setIsStart(true);
  }

  function onClickBuild() {
    setCardTopic(building);
    setIsStart(true);
  }

  function onClickMoney() {
    setCardTopic(money);
    setIsStart(true);
  }

  function onClickNoun() {
    setCardTopic(noun);
    setIsStart(true);
  }

  function onClickConjunction() {
    setCardTopic(conjunction);
    setIsStart(true);
  }

  function onClickTravel() {
    setCardTopic(travel);
    setIsStart(true);
  }

  function onClickHi() {
    setCardTopic(hi);
    setIsStart(true);
  }

  function onClickAdverb() {
    setCardTopic(adverb);
    setIsStart(true);
  }

  function onClickPronoun() {
    setCardTopic(pronoun);
    setIsStart(true);
  }

  function onClickAdjective() {
    setCardTopic(adjective);
    setIsStart(true);
  }

  function onClickAll() {
    setCardTopic(all);
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
    setMoves(moves + 1);
  };

  useEffect(() => {
    if (openedCards < 2) return;
    const firstMatched = arrayCards[openedCards[0]];
    const secondMatched = arrayCards[openedCards[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
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
            onClickAll={onClickAll}
            onClickAnimals={onClickAnimals}
            onClickFeelings={onClickFeelings}
            onClickBuild={onClickBuild}
            onClickMoney={onClickMoney}
            onClickNoun={onClickNoun}
            onClickConjunction={onClickConjunction}
            onClickTravel={onClickTravel}
            onClickHi={onClickHi}
            onClickAdverb={onClickAdverb}
            onClickPronoun={onClickPronoun}
            onClickAdjective={onClickAdjective}
          />
          {!isStart && (
            <div className="cards__item-top">
              <div className="cards__item-tr">Проверь себя!</div>
              <div className="cards__item-play-en">Выбери тему</div>
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
