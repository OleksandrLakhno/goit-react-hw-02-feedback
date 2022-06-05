import React, { Component } from "react";
import Section from "components/Feedback/Section";
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistic from "components/Feedback/Statistic";
import Notification from "components/Feedback/Notification";
  
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = (e) => {
    // this.setState({ good: this.state.good + 1 });
    const stateKey = e.target.name;
    this.setState(state => ({ [stateKey]: state[stateKey] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, state) => {return acc + state } , 0);
  };
  countPositiveFeedbackPercentage = () => { 
    const { good } = this.state;
    return good >= 1 ? ((good / this.countTotalFeedback()) * 100).toFixed(0) : 0;
  };
//   handleIncrementNeutral = () => {
// this.setState({neutral:this.state.neutral +1});
//   };

//    handleIncrementBad = () => {
// this.setState({bad:this.state.bad +1});
//    };
  
  
  render() {
    // console.log(Object.keys(this.state));
    const { good,neutral,bad } = this.state;
    // const total = good + neutral + bad;
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onIncrement={this.handleIncrement}
            options={ Object.keys(this.state)}
          />
        </Section>
        <Section title={"Statistic"}>
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              count={this.countPositiveFeedbackPercentage()}
            />) : (<Notification message={'There is no feedback'}/>)
          }
        </Section>
        
      </>
    )
  }
}

export default App;
