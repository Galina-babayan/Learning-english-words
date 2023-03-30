import "./PageMain.scss";
//import main from "../../images/main.jpg";

export default function PageMain() {
  return (
    <section className="page-main">
      <div className="page-main__container container">
        <div className="page-main__body">
          <div className="page-main__name">
            <p className="page-main__title">Come to life.</p>
            <p className="page-main__title">Come to language.</p>
          </div>
          <div className="page-main__text">
            Слова по темам на английском языке удобны тем, что в любой момент
            времени вы можете выучить или повторить лексику на интересующую вас
            тему.
          </div>
        </div>
      </div>
      {/* <div className="page-main__image ibg">
        <img src={main} alt="" />
      </div> */}
    </section>
  );
}
