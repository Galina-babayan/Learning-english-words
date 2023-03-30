import "../WordString/WordString.scss";

import iconDel from "../../images/iconDel.png";
import iconSave from "../../images/iconSave.png";

export default function StringAdd(props) {
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
              <div href="#" className="words__result">
                <img src={iconSave} alt="" />
              </div>
            </div>

            <div className="words__button">
              <div onClick={props.delString} href="#" className="words__result">
                <img src={iconDel} alt="" />
              </div>
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
