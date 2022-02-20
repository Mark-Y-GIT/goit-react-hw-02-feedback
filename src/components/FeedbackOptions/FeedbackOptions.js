import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const modifyName = option => option[0].toUpperCase() + option.slice(1);
  return options.map(option => (
    <button
      key={option}
      name={option}
      type="button"
      className={s.btn}
      onClick={() => onLeaveFeedback(option)}
    >
      {modifyName(option)}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
