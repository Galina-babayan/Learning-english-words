import "./CardsTopics.scss";

export default function CardsTopics(props) {
  return (
    <div className="cards__topics">
      <p className="cards__topics-title">Выберите тему</p>
      <ul className="cards__topics-list">
        <li className="cards__topics-subject">
          <div onClick={props.onClickWerbs}>Глаголы</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickProfessions}>Профессии</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickKitchen}>Кухня</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickTransport}>Транспорт</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickClothes}>Одежда</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickAnimals}>Животные</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickPlants}>Съедобные растения</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickFeelings}>Чувства</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickColors}>Цвета</div>
        </li>
        <li className="cards__topics-subject">
          <div onClick={props.onClickSea}>Море</div>
        </li>
      </ul>
    </div>
  );
}
