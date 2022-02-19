import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const name = event.currentTarget.name.toLowerCase();

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    let percent = parseInt((good / this.countTotalFeedback()) * 100);

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countPositiveFeedbackPercentage, countTotalFeedback } = this;
    return (
      <div className="wraper">
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleClick}
          />
          <Section title="Statistics">
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </Section>
      </div>
    );
  }
}
export default App;
