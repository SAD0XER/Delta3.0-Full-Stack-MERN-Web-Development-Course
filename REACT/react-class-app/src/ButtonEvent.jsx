function buttonClicked() {
  console.log("times button clicked!");
}

export default function ButtonEvent() {
  return (
    <>
      <button onClick={buttonClicked}>Click Me!</button>
    </>
  );
}
