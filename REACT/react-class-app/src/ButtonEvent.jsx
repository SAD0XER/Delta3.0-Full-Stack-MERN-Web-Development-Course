function onClick() {
  console.log("onClick Event");
}

function onDoubleClick() {
  console.log("onDoubleClick event");
}

function onMouseOver() {
  console.log("onMouseOver Event");
}

export default function ButtonEvent() {
  return (
    <>
      <button onClick={onClick}>Click Me!</button>
      <p onMouseOver={onMouseOver}>onMouseOverEvent!</p>
      <button onDoubleClick={onDoubleClick}>Click Me!</button>
    </>
  );
}
