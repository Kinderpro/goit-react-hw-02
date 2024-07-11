import css from './Feedback.module.css'
export default function Feedback({value, total, positiveFeedback}) {

  return (
    <div className={css.container}>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      {total > 0 &&  <p>Total: {total}</p>}
       <p>Positive: {positiveFeedback}%</p>
     
    </div>
  );
}
