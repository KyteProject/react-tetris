import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ type }) => <div>cell</div>;

Cell.propTypes = {
	type: PropTypes.number.isRequired,
};

export default Cell;
