import PropTypes from 'prop-types';
import css from "./Statistics.module.css"


export default function Statistics({
    good,
    neutral,
    bad,
    total,
    positiveFeedback
    }) {
    return (
        <ul className={css.feedback__statistics}>
            <li className={css.feedback__item}><span>Good: {good}</span> </li>
            <li className={css.feedback__item}><span>Neutral: {neutral}</span> </li>
            <li className={css.feedback__item}><span>Bad: {bad}</span></li>
            <li className={css.feedback__item}><span>Total: {total}</span></li>
            <li className={css.feedback__item}>Positive feedback: 
            {positiveFeedback < 0  || Number.isNaN(positiveFeedback) ? (
                <span></span>
            ) : (
              <span>{` ${positiveFeedback}%`}</span>      
            )}
            </li>
        </ul>
    )
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}