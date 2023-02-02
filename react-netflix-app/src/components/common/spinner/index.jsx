/* eslint-disable import/extensions */
import Lottie from 'lottie-react';
import LoadingLottie from '@assets/lottie/loading-lottie.json';
import PropTypes from 'prop-types';

const DEFAULT_SPINNER_SIZE = 64;

const Spinner = ({ size }) => (
  <Lottie animationData={LoadingLottie} loop style={{ width: size, height: size }} />
);

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.defaultProps = {
  size: DEFAULT_SPINNER_SIZE,
};

export default Spinner;
