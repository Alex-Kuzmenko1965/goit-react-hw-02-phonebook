// import './App.css';
import React, { Component } from 'react';
import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';
// import user from './components/Data/user.json';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = (event) => {    
    // console.log(event.target.name);
    const options = event.target.name;
    console.log(options);
    if (options === "good") {
      this.setState((prevState) => ({
      good: (prevState.good += 1),        
    }));} 
    if (options === "bad") {
      this.setState((prevState) => ({
      bad: (prevState.bad += 1),        
    }));}
    if (options === "neutral") {
      this.setState((prevState) => ({
      neutral: (prevState.neutral += 1),        
    }));
    }
  };

  // countTotalFeedback() {
  //   const total = this.state.good + this.state.bad + this.state.neutral;
  //   console.log(total);
  //   return total;
  // };

  // countPositiveFeedbackPercentage() {
  //   const positivePercentage = (this.state.good / this.total).toFixed(2);
  //   console.log(positivePercentage);
  //   return positivePercentage;
  // };

  render() {
    const { good, neutral, bad } = this.state;    
    const total = good + neutral + bad;
    console.log(total);
    const positivePercentage = (good / total).toFixed(2);
    console.log(positivePercentage);    

  return (
    <>    
    <Section title={"Please leave feedback"}>   
      <FeedbackOptions  onLeaveFeedback = {this.onLeaveFeedback} />
    </Section>
    <Section title={"Statistics"}>
      <Statistics  good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
    </Section>
    </>      
  );}
}
