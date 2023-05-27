// import cl from './FeedbackOptions.module.css';

export const FeedbackOptions = ({onLeaveFeedback}) => {
  return (
    <>
    <button name = "good"  onClick={onLeaveFeedback}>Good</button>
    <button name = "neutral" onClick={onLeaveFeedback}>Neutral</button>
    <button name = "bad" onClick={onLeaveFeedback}>Bad</button>
    </>
  );
};