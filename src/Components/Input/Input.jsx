import "../WordString/WordString.scss";
import { useState } from "react";

export default function Input(props) {
  let { valueWord, onChange, name, onBlur, pattern, isValidInput } = props;

  const [valueInput, setValueInput] = useState(valueWord);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  function ChangeInput(event) {
    setValueInput(event.target.value);

    switch (event.target.name) {
      case "english":
        onChange(event);
        if (event.target.value === "") {
          setIsValid(false);
          setError("Заполните поле!");
        } else if (!event.target.value.match("^[a-zA-Z0-9]+$")) {
          setIsValid(false);
          setError("Только латиница!");
        } else {
          setIsValid(true);

          setError("");
        }

        break;
      case "russian":
        onChange(event);
        if (event.target.value === "") {
          setIsValid(false);
          setError("Заполните поле!");
        } else if (!event.target.value.match("[а-яА-ЯЁё]")) {
          setIsValid(false);
          setError("Только кириллица!");
        } else {
          setIsValid(true);
          setError("");
        }
        break;
      case "transcription":
        onChange(event);
        if (event.target.value === "") {
          setIsValid(false);
          setError("Заполните поле!");
        }
        // else if (!event.target.value.match("^[a-zA-Z0-9[]]+$")) {
        //   setIsValid(false);
        //   setError("Только латиница!");
        // }
        else {
          setIsValid(true);
          setError("");
        }
        break;
      case "tags":
        onChange(event);
        if (event.target.value === "") {
          setIsValid(false);
          setError("Заполните поле!");
        } else if (!event.target.value.match("[а-яА-ЯЁё]")) {
          setIsValid(false);
          setError("Только кириллица!");
        } else {
          setIsValid(true);
          setError("");
        }
        break;
    }
  }

  return (
    <>
      <div className="words-item__new">
        {!isValid ? (
          <div className="words-item__notice">{error}</div>
        ) : (
          <div className="words-item__notice">Внесите изменения:</div>
        )}

        <input
          onChange={ChangeInput}
          onBlur={onBlur}
          name={name}
          className={`words-item__add ${
            isValid ? "" : "words-item__add-error"
          }`}
          type="text"
          value={valueInput}
          placeholder={valueWord}
          pattern={pattern}
        />
      </div>
    </>
  );
}
