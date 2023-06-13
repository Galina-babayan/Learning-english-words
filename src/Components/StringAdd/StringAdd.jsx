import "../WordString/WordString.scss";

import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";

import Input from "../Input/Input";

import { useState, useEffect, useContext } from "react";
import { WordsContext } from "../../context/Context";

export default function StringAdd(props) {
  //let { id } = props;
  const [isValidInput, setIsValidInput] = useState(true);

  const [valueEn, setValueEn] = useState("");
  const [valueRu, setValueRu] = useState("");
  const [valueTr, setValueTr] = useState("");
  const [valueSubject, setValueSubject] = useState("");
  const [valueMeaning, setValueMeaning] = useState("");

  const [error, setError] = useState("");
  const [err, setErr] = useState("");

  //const { addWord, words } = useContext(WordsContext);

  const context = useContext(WordsContext);

  const addWord = context.addWord;
  const words = context.words;

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
    } else if (
      !valueEn.match("^[a-zA-Z0-9]+$") ||
      !valueRu.match("[а-яА-ЯЁё]") ||
      !valueSubject.match("[а-яА-ЯЁё]")
    ) {
      setIsValidInput(false);
    } else setIsValidInput(true);
  }

  useEffect(() => {
    checkString();
  }, [valueEn, valueTr, valueRu, valueSubject]);

  async function save(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    let newWord = {
      english: form.get("english"),
      transcription: form.get("transcription"),
      russian: form.get("russian"),
      tags: form.get("tags"),
    };

    const err = await context.addWord(newWord);
    setErr(err);

    //addWord(newWord);
  }

  return (
    <>
      {err}
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
                <button
                  // onClick={finish}
                  disabled={!isValidInput}
                  className="words__result"
                >
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
    </>
  );
}
