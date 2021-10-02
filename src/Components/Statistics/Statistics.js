import PropTypes from 'prop-types';
import s from 'Components/Statistics/Statistics.module.css';

export default function Statistics({ states, total, percentage }) {
  return (
    <>
      {Object.keys(states).map(i => (
        <p key={i}>
          {i}: {states[i]}
        </p>
      ))}
      <p>total : {total}</p>
      <p>percentage: {percentage}%</p>
    </>
  );
}

Statistics.propTypes = {
  states: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
