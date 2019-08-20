import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ gameOver, text }) => <div>{text}</div>;

Display.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Display;
