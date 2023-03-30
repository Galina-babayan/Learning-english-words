import "./MainButton.scss";

export default function MainButton(props) {
  return (
    <div onClick={props.funcClick} className="main__button">
      {props.text}
    </div>
  );
}
