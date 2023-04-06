import "./WordString.scss";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";
import iconCancel from "../../images/iconCancel.png";
import { useState } from "react";

export default function WordString(props) {
  let { en, tr, ru, subject, meaning } = props;
  const [isRedact, changeRedact] = useState(false);

  const [word, setWord] = useState({ en, tr, ru, subject, meaning });

  function redact() {
    changeRedact(true);
  }

  function cancel() {
    setWord({ en, tr, ru, subject, meaning });
    changeRedact(false);
  }

  function save() {
    changeRedact(false);
  }

  function onChangeEn(event) {
    setWord({
      en: event.target.value,
      tr: word.tr,
      ru: word.ru,
      subject: word.subject,
      meaning: word.meaning,
    });
  }

  function onChangeTr(event) {
    setWord({
      en: word.en,
      tr: event.target.value,
      ru: word.ru,
      subject: word.subject,
      meaning: word.meaning,
    });
  }

  function onChangeRu(event) {
    setWord({
      en: word.en,
      tr: word.tr,
      ru: event.target.value,
      subject: word.subject,
      meaning: word.meaning,
    });
  }

  function onChangeSubj(event) {
    setWord({
      en: word.en,
      tr: word.tr,
      ru: word.ru,
      subject: event.target.value,
      meaning: word.meaning,
    });
  }

  function onChangeMean(event) {
    setWord({
      en: word.en,
      tr: word.tr,
      ru: word.ru,
      subject: word.subject,
      meaning: event.target.value,
    });
  }

  return (
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
                <div onClick={redact} className="words__result">
                  <img src={iconRedact} alt="" />
                </div>
              </div>
              <div className="words__button">
                <div className="words__result">
                  <img src={iconDel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </summary>
      )}
      {isRedact && (
        <summary>
          <div className="words-item__body">
            <div className="words-item__new">
              <input
                onChange={onChangeEn}
                className="words-item__add"
                type="text"
                defaultValue={word.en}
              />
            </div>
            <div className="words-item__new">
              <input
                onChange={onChangeTr}
                className="words-item__add"
                type="text"
                defaultValue={word.tr}
              />
            </div>
            <div className="words-item__new">
              <input
                onChange={onChangeRu}
                className="words-item__add"
                type="text"
                defaultValue={word.ru}
              />
            </div>
            <div className="words-item__new">
              <input
                onChange={onChangeSubj}
                className="words-item__add"
                type="text"
                defaultValue={word.subject}
              />
            </div>

            <div className="words__service">
              <div className="words__button-save">
                <div onClick={save} className="words__result">
                  <img src={iconSave} alt="" />
                </div>
              </div>

              <div className="words__button">
                <div onClick={cancel} className="words__result">
                  <img src={iconCancel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </summary>
      )}
      {!isRedact && <p>{word.meaning}</p>}
      {isRedact && (
        <textarea
          onChange={onChangeMean}
          className="words-item__meaning"
          placeholder={word.meaning}
          name=""
          id=""
          cols="60"
          rows="5"
        ></textarea>
      )}
    </details>
  );
}
