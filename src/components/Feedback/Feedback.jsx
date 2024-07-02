export default function Feedback({ value, positive, total }) {
  return (
    <ul>
      <li>Good:{value.good} </li>
      <li>Neutral:{value.neutral}</li>
      <li>Bad:{value.bad}</li>
      <li>Total:{total}</li>
      <li>Positive:{positive}%</li>
    </ul>
  );
}
