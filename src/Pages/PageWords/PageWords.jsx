import "./PageWords.scss";
import MainButton from "../../Components/MainButton/MainButton";
import WordString from "../../Components/WordString/WordString";
import StringAdd from "../../Components/StringAdd/StringAdd";

import Json from "../../Components/utils/Json.js";
import { useState } from "react";

let words = JSON.parse(Json);

// Почему-то кнопка "добавить слово" (если я нажимаю кнопку "Х" на строке) срабатывает только один раз.
// Второй раз не появляется пустая строка для ввода.

export default function PageWords() {
  const [addWord, setAddWord] = useState(false);
  const [newString, setdelString] = useState(true);

  // const [newEn, setNewEn] = useState("");
  // const [newRu, setNewRu] = useState("");
  // const [newTr, setNewTr] = useState("");
  // const [newSubject, setNewSubject] = useState("");
  // const [newMeaning, setNewMeaning] = useState("");

  function newWord() {
    setAddWord(true);
    setdelString(true);
  }

  // let redactedWord;
  // redactedWord = {
  //   en: newEn,
  //   tr: newTr,
  //   ru: newRu,
  //   subject: newSubject,
  //   // meaning: newMeaning,
  // };

  // useEffect(() => {
  //   getNewWord();
  // }, [newEn, newTr, newRu, newSubject]);

  function delHandleString() {
    setAddWord(false);
    setdelString(false);
  }

  // function getNewWord(event) {
  //   const form = new FormData(event.target);

  //   setNewEn(form.get("english"));

  //   setNewRu(form.get("russian"));
  //   setNewTr(form.get("transcription"));
  //   setNewSubject(form.get("tags"));

  //   // const redactedWord = {
  //   //   en: newEn,
  //   //   tr: newTr,
  //   //   ru: newRu,
  //   //   subject: newSubject,
  //   //   // meaning: newMeaning,
  //   // };
  //   // console.log(redactedWord);
  // }
  // function finishAdd() {
  //   setAddWord(false);
  //   setdelString(false);
  // }

  // function onSaveEn(newEn) {
  //   setNewEn(newEn);
  // }

  if (words) {
    return (
      <section className="words">
        <div className="words__container container">
          <div className="main__title">Библиотека слов</div>

          <div className="words__body">
            <div className="words__aside">
              <MainButton funcClick={newWord} text="Добавить слово" />
            </div>
            {addWord && newString && <StringAdd delString={delHandleString} />}

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
                    english={word.english}
                    transcription={word.transcription}
                    russian={word.russian}
                    tags={word.tags}
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
