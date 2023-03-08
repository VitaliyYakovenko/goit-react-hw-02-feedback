import PropTypes from 'prop-types';
import css from "./Section.module.css"

export default function Section({title, children}) {
    return (
        <>
        <h1 className={css.feedback__title}>{title}</h1>
        {children}
        </>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
}






// import Statistics from "./Statistics";
// import FeedbackOptions  from "./FeedbackOption";

// export default function Section({
//     title,
//     good,
//     neutral,
//     bad,
//     total,
//     positiveFeedback,
//     onAddGoodFeedback,
//     onAddNeutralFeedback,
//     onAddBadFeedback }) {
//     return (
//         <>
//         <h1>{title}</h1>
//         <FeedbackOptions
//             onAddGoodFeedback={onAddGoodFeedback}
//             onAddNeutralFeedback={onAddNeutralFeedback}
//             onAddBadFeedback= {onAddBadFeedback}    
//         />
//         <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={total}
//         positiveFeedback= {positiveFeedback}        
//         />
//         </>
//     )
// }