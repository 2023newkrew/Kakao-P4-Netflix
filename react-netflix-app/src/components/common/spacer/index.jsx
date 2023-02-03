import PropTypes from 'prop-types';

const Spacer = ({ width, height }) => <div style={{ width, height }} />;

Spacer.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Spacer.defaultProps = {
  width: '0',
  height: '0',
};

export default Spacer;
