import { useState } from "react";
import css from '../App/App.module.css'
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Description from "../Description/Description";
import Notification from '../Notification/Notification'
export default function App() {
  const [values, setValues] = useState({ good: 0, neutral: 0, bad: 0 });

  const updateFeedback = (feedbackType) => {
    setValues({ ...values, [feedbackType]: values[feedbackType] + 1 });
  };
  const resetValue = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };
  const totalValues = values.bad + values.good + values.neutral;

  const positiveFeedback = totalValues > 0 ? Math.round((values.good / (totalValues) * 100)): 0
  
  return (
    <div>
      <Description />

      <Options updateFeedback={updateFeedback} reset={resetValue} total={totalValues}/>
      {totalValues > 0 ? <Feedback value={values} total={totalValues} positiveFeedback={positiveFeedback}/> : <Notification/>}
      
    </div>
  );
}
