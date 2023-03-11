import PropTypes from 'prop-types';
import css from "./FeedbackOption.module.css"


export default function FeedbackOptions({option, onLeaveFeedback }) {
    return (
        <ul className={css.feedback__btn}>
        {option.map(option => (
            <li key={option}>
                <button onClick={()=> {onLeaveFeedback(option)}} type='button'>{option}</button>
            </li>
       ))}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option:  PropTypes.array.isRequired,
}


