import "../WordString/WordString.scss";

import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";

import Input from "../Input/Input";

import { useState, useEffect } from "react";

export default function StringAdd(props) {
  const [isValidInput, setIsValidInput] = useState(true);

  const [valueEn, setValueEn] = useState("");
  const [valueRu, setValueRu] = useState("");
  const [valueTr, setValueTr] = useState("");
  const [valueSubject, setValueSubject] = useState("");
  const [valueMeaning, setValueMeaning] = useState("");

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

  function onHandlerChangeMean(event) {
    setValueMeaning(event.target.value);
    if (event.target.value === "") {
      setError("Поле не может быть пустым!");
    } else {
      setError("");
    }
  }

  const [error, setError] = useState("");

  let classNameTextArea = "words-item__meaning";
  if (error) {
    classNameTextArea += " words-item__add-error";
  }

  let classNameSaveButton = "words__button-save";
  if (!isValidInput) {
    classNameSaveButton += " words__button-error";
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

    const newWord = {
      english: form.get("english"),
      transcription: form.get("transcription"),
      russian: form.get("russian"),
      tags: form.get("tags"),
      meaning: valueMeaning,
    };

    console.log(newWord);

    //changeRedact(false);
  }

  return (
    <details className="words__add">
      <summary>
        <form onSubmit={save} className="words-item__body">
          <Input name="english" valueWord="слово" onChange={handleEn} />
          <Input
            name="transcription"
            valueWord="транскрипция"
            onChange={handleTr}
          />
          <Input name="russian" valueWord="перевод" onChange={handleRu} />
          <Input name="tags" valueWord="тема" onChange={handleSubject} />

          <div className="words__service">
            <div className={classNameSaveButton}>
              <button disabled={!isValidInput} className="words__result">
                <img src={iconSave} alt="" />
              </button>
            </div>
            <div className="words__button">
              <button
                onClick={props.delString}
                href="#"
                className="words__result"
              >
                <img src={iconDel} alt="" />
              </button>
            </div>
          </div>
        </form>
      </summary>

      <textarea
        onChange={onHandlerChangeMean}
        className={classNameTextArea}
        placeholder="значение"
        value={valueMeaning}
        cols="60"
        rows="5"
      ></textarea>
    </details>
  );
}
