import PropTypes from 'prop-types';
import css from "./FeedbackOption.module.css"


export default function FeedbackOptions({
    onAddGoodFeedback,
    onAddNeutralFeedback,
    onAddBadFeedback,
}) {
    return (
        <ul className={css.feedback__btn}>
        <li><button  onClick={onAddGoodFeedback} type="button">Good</button></li>   
        <li><button onClick={onAddNeutralFeedback} type="button">Neutral</button></li>
        <li><button onClick={onAddBadFeedback} type="button">Bad</button></li>
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onAddGoodFeedback: PropTypes.func.isRequired,
    onAddNeutralFeedback: PropTypes.func.isRequired,
    onAddGoodFeedback : PropTypes.func.isRequired,
}