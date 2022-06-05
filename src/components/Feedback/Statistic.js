import React from "react";
import PropTypes from 'prop-types';
import f from "./Feedback.module.css";

const Statistic = ({ good, neutral, bad, total, count }) => {
    return (
        <div>
            <ul>
                <li key='good'>
                    <p className={f.list}>
                        Good: {good}
                    </p>
                </li>

                <li key='neutral'>
                    <p className={f.list}>
                        Neutral: {neutral}
                    </p>
                </li>

                <li key='bad'>
                    <p className={f.list}>
                        Bad: {bad}
                    </p>
                </li>

                <li key='countTotalFeedback'>
                    <p className={f.list}>
                        Total: {total}
                    </p>
                </li>
                <li key="count">
                    <p className={f.list}>
                        Positive feedback: {count + '%'}
                    </p>
                </li>
            </ul>
        </div>
    )
};

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    count: PropTypes.func.isRequired,
};

export default Statistic;