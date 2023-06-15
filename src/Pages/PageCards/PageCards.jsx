import "./PageCards.scss";

import CardsTopics from "../../Components/CardsTopics/CardsTopics";
import WordCard from "../../Components/WordCard/WordCard";

import MainButton from "../../Components/MainButton/MainButton";

import { useState, useEffect } from "react";
import { observer, inject } from "mobx-react";
//import { WordsContext } from "../../context/Context";

function PageCards({ words, loadData }) {
  // const context = useContext(WordsContext);
  // const words = context.words;
  //const words = wordsData.words;
  console.log(words);

  useEffect(() => {
    loadData();
  });
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

  const [cardIndex, setCardIndex] = useState(0);
  let [cardTopic, setCardTopic] = useState(null);
  const [isStart, setIsStart] = useState(false);
  const [isCheckedWords, setIsCheckedWords] = useState(0);

  function onCheckWordClicked() {
    setIsCheckedWords(isCheckedWords + 1);
    console.log(isCheckedWords);
  }

  function nextCard() {
    setCardIndex(cardIndex + 1);
  }

  function startAgain() {
    setIsStart(false);
    setCardIndex(0);
    setIsCheckedWords(0);
    console.log(isCheckedWords);
  }

  function onClickWerbs() {
    setCardTopic(werbs);
    setIsStart(true);
    console.log(isCheckedWords);
  }

  function onClickAll() {
    setCardTopic(all);
    setIsStart(true);
    console.log(isCheckedWords);
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
                    <div className="cards__item-back">
                      <div className="cards__item-en">Проверь себя!</div>
                      <div className="cards__item-tr">Нажми на кнопку:</div>
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
                            ((cardTopic.length - isCheckedWords) /
                              cardTopic.length) *
                              100
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

export default inject(({ wordsData }) => {
  const { words, loadData } = wordsData;

  return {
    words,
    loadData,
  };
})(observer(PageCards));

//export default inject(["wordsData"])(observer(PageCards));
