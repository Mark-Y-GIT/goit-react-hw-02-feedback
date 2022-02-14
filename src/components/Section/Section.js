import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}

Section.defaultProps = {
  title: 'Please leave a feedback',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
