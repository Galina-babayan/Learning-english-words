import "./WordString.scss";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";
import iconCancel from "../../images/iconCancel.png";
import Input from "../Input/Input";

import { useState, useEffect } from "react";

export default function WordString(props) {
  let { english, transcription, russian, tags, meaning } = props;
  const [word, setWord] = useState({
    english,
    transcription,
    russian,
    tags,
    meaning,
  });
  const [isRedact, changeRedact] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const [valueEn, setValueEn] = useState(word.english);
  const [valueRu, setValueRu] = useState(word.russian);
  const [valueTr, setValueTr] = useState(word.transcription);
  const [valueSubject, setValueSubject] = useState(word.tags);
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
    console.log(valueEn);
    console.log(isValidInput);
    //setIsValidInput(false);
  }

  function cancel() {
    setWord({ english, transcription, russian, tags, meaning });
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
      english: form.get("english"),
      transcription: form.get("transcription"),
      russian: form.get("russian"),
      tags: form.get("tags"),
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
              <div className="words-item__title">{word.english}</div>
              <div className="words-item__title">{word.transcription}</div>
              <div className="words-item__title">{word.russian}</div>
              <div className="words-item__title">{word.tags}</div>
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
              <Input
                id="1"
                name="english"
                valueWord={valueEn}
                onChange={handleEn}
              />
              <Input
                id="2"
                name="transcription"
                valueWord={valueTr}
                onChange={handleTr}
              />
              <Input
                id="3"
                name="russian"
                valueWord={valueRu}
                onChange={handleRu}
              />
              <Input
                id="4"
                name="tags"
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
        {!isRedact && <p>{word.russian}</p>}
        {/* {isRedact && (
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
        )} */}
      </details>
    </>
  );
}
