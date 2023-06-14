import "./WordString.scss";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";
import iconCancel from "../../images/iconCancel.png";
import Input from "../Input/Input";
import { observer, inject } from "mobx-react";
//import { WordsContext } from "../../context/Context";

import { useState, useEffect } from "react";

function WordString(props, { updateWord, deleteWord, LoadData }) {
  // const context = useContext(WordsContext);
  //const { updateWord, deleteWord } = useContext(WordsContext);
  // const updateWord = wordsData.updateWord;
  // const deleteWord = wordsData.deleteWord;

  useEffect(() => {
    LoadData();
  });

  let { english, transcription, russian, tags, id } = props;
  const [word, setWord] = useState({
    english,
    transcription,
    russian,
    tags,
  });
  const [isRedact, changeRedact] = useState(false);
  const [isValidInput, setIsValidInput] = useState(true);

  const [valueEn, setValueEn] = useState(word.english);
  const [valueRu, setValueRu] = useState(word.russian);
  const [valueTr, setValueTr] = useState(word.transcription);
  const [valueSubject, setValueSubject] = useState(word.tags);

  useEffect(() => {
    setWord({
      english: props.english,
      transcription: props.transcription,
      russian: props.russian,
      tags: props.tags,
    });
  }, [props.english, props.transcription, props.russian, props.tags]);

  function redact() {
    changeRedact(true);
    console.log(valueEn);
    console.log(isValidInput);
  }

  function removeWord() {
    const extradWord = {
      english: valueEn,
      transcription: valueTr,
      russian: valueRu,
      tags: valueSubject,
    };
    deleteWord(id, extradWord);
    console.log(id);
  }

  const handleEn = (event) => {
    setValueEn(event.target.value);
    if (!event.target.value.match("^[a-zA-Z0-9]+$")) {
      setIsValidInput(false);
    } else {
      setIsValidInput(true);
    }
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

  let classNameSaveButton = "words__button-save";
  if (!isValidInput) {
    classNameSaveButton += " words__button-error";
  }

  function cancel() {
    setWord({ english, transcription, russian, tags });
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
    } else if (
      !valueEn.match("^[a-zA-Z0-9]+$") ||
      !valueRu.match("[а-яА-ЯЁё]") ||
      !valueSubject.match("[а-яА-ЯЁё]")
    ) {
      setIsValidInput(false);
    } else setIsValidInput(true);
  }

  // useEffect(() => {
  //   checkString();
  // }, [valueEn, valueTr, valueRu, valueSubject]);

  async function save(event) {
    event.preventDefault();

    console.log(id);

    const redactedWord = {
      english: valueEn,
      transcription: valueTr,
      russian: valueRu,
      tags: valueSubject,
      // id: id,
    };

    updateWord(id, redactedWord);
    console.log(id);
    console.log(redactedWord);
    const err = await updateWord(redactedWord);
    setError(err);

    changeRedact(false);
  }

  return (
    <>
      {error}

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
                  <button
                    onClick={removeWord}
                    id={word.english}
                    className="words__result"
                  >
                    <img src={iconDel} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </summary>
        )}
        {isRedact && (
          <summary>
            <form onSubmit={save} id={id} className="words-item__body">
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
      </details>
    </>
  );
}

export default inject(({ wordsData }) => {
  const { updateWord, deleteWord, LoadData } = wordsData;

  return {
    updateWord,
    deleteWord,
    LoadData,
  };
})(observer(WordString));

//export default inject(["wordsData"])(observer(WordString));
