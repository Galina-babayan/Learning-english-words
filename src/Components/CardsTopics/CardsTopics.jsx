import "./CardsTopics.css";

export default function CardsTopics() {
  return (
    <div className="cards__topics">
      <p className="cards__topics-title">Выберите тему</p>
      <ul className="cards__topics-list">
        <li className="cards__topics-subject">
          <a href="">Глаголы</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Профессии</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Кухня</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Транспорт</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Одежда</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Животные</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Съедобные растения</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Чувства</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Цвета</a>
        </li>
        <li className="cards__topics-subject">
          <a href="">Море</a>
        </li>
      </ul>
    </div>
  );
}
