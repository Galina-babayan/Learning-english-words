import "./MainButton.css";

export default function MainButton(props) {
  return (
    <div className="main__buttons">
      <a href="" className="main__button">
        {props.text}
      </a>
    </div>
  );
}
