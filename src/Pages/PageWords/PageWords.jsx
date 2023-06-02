import "./PageWords.scss";
import MainButton from "../../Components/MainButton/MainButton";
import WordString from "../../Components/WordString/WordString";
import StringAdd from "../../Components/StringAdd/StringAdd";


import { useContext, useState } from "react";
import { WordsContext } from "../../context/Context";



export default function PageWords() {
  const [addWord, setAddWord] = useState(false);
  const [newString, setNewString] = useState(true);

  const context = useContext(WordsContext);
  const words = context.words;

  function newWord() {
    setAddWord(true);
    setNewString(true);   
  }

  

  function delHandleString() {
    setAddWord(false);
    setNewString(false);   
    
  }



  if (!words) {
    return <h1>Loading</h1>;
  }

  if (words) {
    return (
      <section className="words">
        <div className="words__container container">
          <div className="main__title">Библиотека слов</div>

          <div className="words__body">
            <div className="words__aside">
              <MainButton
                //onButtonClick={addNewWord}
                funcClick={newWord}
                text="Добавить слово"
              />
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
                    id={word.id}
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
