import "./CardsFooter.css";

export default function CardsFooter(props) {
  let { textButton, textLink } = props;
  return (
    <div className="cards__footer">
      <div className="cards__button">
        <a className="cards__selection" href="">
          {textButton}
        </a>
      </div>
      <div className="cards__link">
        <a href="">{textLink}</a>
      </div>
    </div>
  );
}
// не знаю, как делать потом разные подписи на кнопке и на ссылке
