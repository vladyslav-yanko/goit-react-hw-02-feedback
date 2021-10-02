import PropTypes from 'prop-types';
import s from 'Components/FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({ states, onFeedback }) {
  return (
    <>
      {Object.keys(states).map(i => (
        <button
          key={i}
          type="button"
          className={s.btn}
          onClick={() => {
            onFeedback(i);
          }}
        >
          {i}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  states: PropTypes.object.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
