import "./WordString.css";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";

export default function WordString(props) {
  let { en, tr, ru, subject, meaning, redact } = props;
  return (
    <details className="words__string">
      {!redact && (
        <summary>
          <div className="words-item__body">
            <div className="words-item__title">{en}</div>
            <div className="words-item__title">{tr}</div>
            <div className="words-item__title">{ru}</div>
            <div className="words-item__title">{subject}</div>
            <div className="words__service">
              <div className="words__button">
                <a href="" className="words__result">
                  <img src={iconDel} alt="" />
                </a>
              </div>
              <div className="words__button">
                <a href="" className="words__result">
                  <img src={iconRedact} alt="" />
                </a>
              </div>
            </div>
          </div>
        </summary>
      )}
      {redact && (
        <summary>
          <div className="words-item__body">
            <div className="words-item__new">
              <input className="words-item__add" type="text" placeholder={en} />
            </div>
            <div className="words-item__new">
              <input className="words-item__add" type="text" placeholder={tr} />
            </div>
            <div className="words-item__new">
              <input className="words-item__add" type="text" placeholder={ru} />
            </div>
            <div className="words-item__new">
              <input
                className="words-item__add"
                type="text"
                placeholder={subject}
              />
            </div>

            <div className="words__service">
              <div className="words__button-save">
                <a href="" className="words__result">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2989/2989976.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="words__button">
                <a href="" className="words__result">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4007/4007772.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="words__button">
                <a href="" className="words__result">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3156/3156999.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </summary>
      )}
      {!redact && <p>{meaning}</p>}
      {redact && (
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
