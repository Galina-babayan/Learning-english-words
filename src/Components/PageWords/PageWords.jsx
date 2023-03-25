import "./PageWords.css";
import MainButton from "../MainButton/MainButton";
import WordString from "../WordString/WordString";
import StringAdd from "../StringAdd/StringAdd";

import Json from "../Json/Json";

let words = JSON.parse(Json);

let werbs = words.filter((item) => item.subject === `глаголы`);

console.log(werbs);
console.log(werbs.length);

let professions = words.filter(function (item) {
  return item.subject === `профессия`;
});
console.log(professions);

let kitchen = words.filter(function (item) {
  return item.subject === `кухонные принадлежности`;
});
console.log(kitchen);

let transport = words.filter(function (item) {
  return item.subject === `транспорт`;
});
console.log(transport);

let clothes = words.filter(function (item) {
  return item.subject === `одежда`;
});
console.log(clothes);

let animals = words.filter(function (item) {
  return item.subject === `животные`;
});
console.log(animals);

let plants = words.filter(function (item) {
  return item.subject === `съедобные растения`;
});
console.log(plants);

let feelings = words.filter(function (item) {
  return item.subject === `чувства`;
});
console.log(feelings);

let colors = words.filter(function (item) {
  return item.subject === `цвета`;
});
console.log(colors);

let sea = words.filter(function (item) {
  return item.subject === `морская тема`;
});
console.log(sea);

export default function PageWords() {
  return (
    <section className="words">
      <div className="words__container container">
        <div className="main__title">Библиотека слов</div>

        <div className="words__body">
          <div className="words__aside">
            <MainButton text="Добавить слово" />
          </div>
          <StringAdd />
          <div className="words__wrapper">
            <div className="words__list">
              {words.map((word) => (
                <WordString
                  kay={word.id}
                  en={word.en}
                  tr={word.tr}
                  ru={word.ru}
                  subject={word.subject}
                  meaning={word.meaning}
                  redact={word.redact}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
