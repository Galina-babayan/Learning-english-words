import "./WordString.scss";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";
import iconCancel from "../../images/iconCancel.png";
import { useState } from "react";

export default function WordString(props) {
  let { en, tr, ru, subject, meaning } = props;
  const [isRedact, changeRedact] = useState(false);

  function redact() {
    changeRedact(true);
  }

  function cancel() {
    changeRedact(false);
  }

  return (
    <details className="words__string">
      {!isRedact && (
        <summary>
          <div className="words-item__body">
            <div className="words-item__title">{en}</div>
            <div className="words-item__title">{tr}</div>
            <div className="words-item__title">{ru}</div>
            <div className="words-item__title">{subject}</div>
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
                className="words-item__add"
                type="text"
                defaultValue={en}
              />
            </div>
            <div className="words-item__new">
              <input
                className="words-item__add"
                type="text"
                defaultValue={tr}
              />
            </div>
            <div className="words-item__new">
              <input
                className="words-item__add"
                type="text"
                defaultValue={ru}
              />
            </div>
            <div className="words-item__new">
              <input
                className="words-item__add"
                type="text"
                defaultValue={subject}
              />
            </div>

            <div className="words__service">
              <div className="words__button-save">
                <div className="words__result">
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
      {!isRedact && <p>{meaning}</p>}
      {isRedact && (
        <textarea
          className="words-item__meaning"
          placeholder={meaning}
          name=""
          id=""
          cols="60"
          rows="5"
        ></textarea>
      )}
    </details>
  );
}
