export default function Options({ clickBtn, clickReset, total }) {
  return (
    <div>
      <button onClick={() => clickBtn("good")}>Good</button>
      <button onClick={() => clickBtn("neutral")}>Neutral</button>
      <button onClick={() => clickBtn("bad")}>Bad</button>
      {total > 0 && <button onClick={() => clickReset()}>Reset</button>}
    </div>
  );
}
