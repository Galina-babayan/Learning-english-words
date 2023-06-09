import "./MainButton.scss";

export default function MainButton(props) {
  return (
    <button
      onClick={props.funcClick}
      ref={props.focusButton}
      className="main__button"
    >
      {props.text}
    </button>
  );
}
