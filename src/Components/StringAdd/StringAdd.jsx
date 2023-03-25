import "../WordString/WordString.css";

import iconRedact from "../../images/iconRedact.png";
import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";

export default function StringAdd() {
  return (
    <details className="words__add">
      <summary>
        <div className="words-item__body">
          <div className="words-item__new">
            <input
              className="words-item__add"
              type="text"
              placeholder="слово"
            />
          </div>
          <div className="words-item__new">
            <input
              className="words-item__add"
              type="text"
              placeholder="транскрипция"
            />
          </div>
          <div className="words-item__new">
            <input
              className="words-item__add"
              type="text"
              placeholder="перевод"
            />
          </div>
          <div className="words-item__new">
            <input className="words-item__add" type="text" placeholder="тема" />
          </div>

          <div className="words__service">
            <div className="words__button-save">
              <a href="" className="words__result">
                <img src={iconSave} alt="" />
              </a>
            </div>

            <div className="words__button">
              <a href="" className="words__result">
                <img src={iconRedact} alt="" />
              </a>
            </div>

            <div className="words__button">
              <a href="" className="words__result">
                <img src={iconDel} alt="" />
              </a>
            </div>
          </div>
        </div>
      </summary>

      <textarea
        className="words-item__meaning"
        placeholder="значение"
        cols="60"
        rows="5"
      ></textarea>
    </details>
  );
}
