import "./PageWords.scss";
import MainButton from "../MainButton/MainButton";
import WordString from "../WordString/WordString";
import StringAdd from "../StringAdd/StringAdd";

import Json from "../utils/Json";
import { useState } from "react";

let words = JSON.parse(Json);

// Почему-то кнопка "добавить слово" (если я нажимаю кнопку "Х" на строке) срабатывает только один раз.
// Второй раз не появляется пустая строка для ввода.

export default function PageWords() {
  const [addWord, setAddWord] = useState(false);
  const [newString, setdelString] = useState(true);

  function newWord() {
    setAddWord(!addWord);
  }

  function delString() {
    setdelString(false);
  }

  if (words) {
    return (
      <section className="words">
        <div className="words__container container">
          <div className="main__title">Библиотека слов</div>

          <div className="words__body">
            <div className="words__aside">
              <MainButton funcClick={newWord} text="Добавить слово" />
            </div>
            {addWord && newString && <StringAdd delString={delString} />}

            <section className="words__top">
              <div className="words-item__top">
                <div className="words-item__subtitle">Слово:</div>
                <div className="words-item__subtitle">транскрипция:</div>
                <div className="words-item__subtitle">перевод:</div>
                <div className="words-item__subtitle">Тема:</div>
              </div>
            </section>

            <div className="words__wrapper">
              <div className="words__list">
                {words.map((word) => (
                  <WordString
                    key={word.id}
                    en={word.en}
                    tr={word.tr}
                    ru={word.ru}
                    subject={word.subject}
                    meaning={word.meaning}
                    redact={word.redact}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return "LOADING";
}
