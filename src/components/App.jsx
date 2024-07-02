import "./App.css";
import Description from "./Description/Description";
import OptionBattom from "./OptionsBattom/OptionsBattom";
import Feedback from "./Feedback/Feedback";
import { useEffect, useState } from "react";

const getInitiaClick = () => {
  const saveClick = window.localStorage.getItem("handelClick");
  if (saveClick !== null) {
    return JSON.parse(saveClick);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [click, setClick] = useState(getInitiaClick);

  const updateFeedback = (feedbackType) => {
    setClick({ ...click, [feedbackType]: click[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("handelClick", JSON.stringify(click));
  }, [click]);

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
