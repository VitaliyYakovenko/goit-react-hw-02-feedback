import React, { Component } from "react";
import PropTypes from 'prop-types';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOption/FeedbackOption";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import css from "./Feedback.module.css"


class Feedback extends Component {
    static defualtProps = {
        initialValue: 0,
    }
    static propTypes = {
        initialValue: PropTypes.number.isRequired,
    }

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
    };

    onAddGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    };
    onAddNeutralFeedback = () => {
        this.setState(prevState => ({
         neutral: prevState.neutral + 1,
        }))
    };
    onAddBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    };
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
        const total = good + bad + neutral
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state
        const total = good + bad + neutral;
        return Math.round(good / total * 100);
    };
    
    render() {

        const { good, neutral, bad } = this.state
        return (
            <div className={css.feedback}>
            <Section title="Please leave feedback">
            <FeedbackOptions
            onAddGoodFeedback={this.onAddGoodFeedback}
            onAddNeutralFeedback={this.onAddNeutralFeedback}
            onAddBadFeedback={this.onAddBadFeedback}              
            />  
            </Section>
            <Section title="Statistics">
            {good || bad || neutral > 0
            ? <Statistics            
            good={good}
            neutral={neutral}
            bad={bad}
            total = {this.countTotalFeedback()}
            positiveFeedback = {this.countPositiveFeedbackPercentage()}
            />    
            : <Notification message="There is no feedback"/>
            }
            </Section>
          </div>
        )
    }
    

}

export default Feedback;
