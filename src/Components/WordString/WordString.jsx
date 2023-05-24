import "./WordString.scss";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";
import iconCancel from "../../images/iconCancel.png";
import Input from "../Input/Input";

import { useState, useEffect } from "react";

export default function WordString(props) {
  let { en, tr, ru, subject, meaning } = props;
  const [word, setWord] = useState({ en, tr, ru, subject, meaning });
  const [isRedact, changeRedact] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const [valueEn, setValueEn] = useState(word.en);
  const [valueRu, setValueRu] = useState(word.ru);
  const [valueTr, setValueTr] = useState(word.tr);
  const [valueSubject, setValueSubject] = useState(word.subject);
  const [valueMeaning, setValueMeaning] = useState(word.meaning);

  const handleEn = (event) => {
    setValueEn(event.target.value);
  };

  const handleTr = (event) => {
    setValueTr(event.target.value);
  };

  const handleRu = (event) => {
    setValueRu(event.target.value);
  };

  const handleSubject = (event) => {
    setValueSubject(event.target.value);
  };

  const [error, setError] = useState("");

  let classNameTextArea = "words-item__meaning";
  if (error) {
    classNameTextArea += " words-item__add-error";
  }

  let classNameSaveButton = "words__button-save";
  if (!isValidInput) {
    classNameSaveButton += " words__button-error";
  }

  function redact() {
    changeRedact(true);
  }

  function cancel() {
    setWord({ en, tr, ru, subject, meaning });
    changeRedact(false);
  }

  function checkString() {
    if (
      valueEn === "" ||
      valueTr === "" ||
      valueRu === "" ||
      valueSubject === ""
    ) {
      setIsValidInput(false);
    } else setIsValidInput(true);
  }

  useEffect(() => {
    checkString();
  }, [valueEn, valueTr, valueRu, valueSubject]);

  function save(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    const redactedWord = {
      en: form.get("en"),
      tr: form.get("tr"),
      ru: form.get("ru"),
      subject: form.get("subject"),
      meaning: valueMeaning,
    };
    console.log(redactedWord);

    changeRedact(false);
  }

  function onHandlerChangeMean(event) {
    setValueMeaning(event.target.value);
    if (event.target.value === "") {
      setError("Поле не может быть пустым!");
    } else {
      setError("");
    }
  }

  return (
    <>
      <details className="words__string">
        {!isRedact && (
          <summary>
            <div className="words-item__body">
              <div className="words-item__title">{word.en}</div>
              <div className="words-item__title">{word.tr}</div>
              <div className="words-item__title">{word.ru}</div>
              <div className="words-item__title">{word.subject}</div>
              <div className="words__service">
                <div className="words__button">
                  <button onClick={redact} className="words__result">
                    <img src={iconRedact} alt="" />
                  </button>
                </div>
                <div className="words__button">
                  <button className="words__result">
                    <img src={iconDel} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </summary>
        )}
        {isRedact && (
          <summary>
            <form onSubmit={save} className="words-item__body">
              <Input id="1" name="en" valueWord={valueEn} onChange={handleEn} />
              <Input id="2" name="tr" valueWord={valueTr} onChange={handleTr} />
              <Input id="3" name="ru" valueWord={valueRu} onChange={handleRu} />
              <Input
                id="4"
                name="subject"
                valueWord={valueSubject}
                onChange={handleSubject}
              />

              <div className="words__service">
                <div className={classNameSaveButton}>
                  <button disabled={!isValidInput} className="words__result">
                    <img src={iconSave} alt="" />
                  </button>
                </div>

                <div className="words__button">
                  <button onClick={cancel} className="words__result">
                    <img src={iconCancel} alt="" />
                  </button>
                </div>
              </div>
            </form>
          </summary>
        )}
        {!isRedact && <p>{word.meaning}</p>}
        {isRedact && (
          <>
            <div>{error}</div>
            <textarea
              onChange={onHandlerChangeMean}
              className={classNameTextArea}
              placeholder={word.meaning}
              value={valueMeaning}
              name="meaning"
              id=""
              cols="60"
              rows="5"
            ></textarea>
          </>
        )}
      </details>
    </>
  );
}
