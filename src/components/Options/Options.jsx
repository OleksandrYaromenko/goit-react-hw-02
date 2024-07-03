export default function Options({ clickBtn, clickReset }) {
  return (
    <div>
      <button onClick={() => clickBtn("good")}>Good</button>
      <button onClick={() => clickBtn("neutral")}>Neutral</button>
      <button onClick={() => clickBtn("bad")}>Bad</button>
      <button onClick={() => clickReset()}>Reset</button>
    </div>
  );
}
