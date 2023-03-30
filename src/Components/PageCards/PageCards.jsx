import "./PageCards.scss";

import CardsTopics from "../CardsTopics/CardsTopics";
import WordCard from "../WordCard/WordCard";
import CardsFooter from "../CardsFooter/CardsFooter";

export default function PageCards() {
  return (
    <section className="cards">
      <div className="cards__container container">
        <div className="main__title">Карточки</div>
        <div className="cards__body">
          <div className="cards__item">
            <div className="cards__item-body">
              <div className="cards__game">
                <CardsTopics />
                <WordCard
                  kay="1"
                  meaning="to go away from a place or a situation, either permanently or for a temporary period"
                  en="leave"
                  tr="[ liːv ]"
                  ru="уходить, уезжать, оставлять"
                />
              </div>
            </div>
          </div>
          <div className="cards__row">
            <CardsFooter textButton="Не знаю" textLink="Попробовать еще" />
            <CardsFooter textButton="Карточки" textLink="Перемешать" />
            <CardsFooter textButton="Знаю" textLink="Начать заново" />
          </div>
        </div>
      </div>
    </section>
  );
}
