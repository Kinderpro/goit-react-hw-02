import css from './Options.module.css'
export default function Options({ updateFeedback, reset, total }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>Good </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && <button className={css.btn} onClick={reset}>Reset</button>}
      
    </div>
  );
}
