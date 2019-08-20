import React from 'react';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Stage = ({ stage }) => <div>{stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}</div>;

Stage.propTypes = {
	stage: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Stage;
