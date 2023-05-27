import { Notification } from '../Notification/Notification';
// import cl from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
    {(positivePercentage > 0) ? (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  ) : <Notification message="There is no feedback" />}    
  </>
  );
} 
