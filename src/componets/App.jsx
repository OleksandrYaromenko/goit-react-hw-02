import "./App.css";
import Description from "./Description/Description";
import OptionBattom from "./OptionsBattom/OptionsBattom";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";

export default function App() {
  const [click, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });
  const updateFeedback = (feedbackType) => {
    setClick({ ...click, [feedbackType]: click[feedbackType] + 1 });
  };

  const totalFeedback = click.good + click.neutral + click.bad;

  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  const updateReset = () => {
    setClick({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <Description />
      <OptionBattom clickBtn={updateFeedback} clickReset={updateReset} />
      {totalFeedback > 0 ? (
        <Feedback
          value={click}
          positive={positiveFeedback}
          total={totalFeedback}
        />
      ) : (
        <p>There are no any click ..</p>
      )}
    </div>
  );
}
