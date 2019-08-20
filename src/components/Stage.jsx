import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cell from './Cell';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(${props => props.height}, calc(25vw / ${props => props.width}));
	grid-template-columns: repeat(${props => props.width}, 1fr);
	grid-gap: 1px;
	border: 2px solid #333;
	width: 100%;
	max-width: 25vw;
	background: #111;
`;

const Stage = ({ stage }) => (
	<StyledStage width={stage[0].length} height={stage.length}>
		{stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
	</StyledStage>
);

Stage.propTypes = {
	stage: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Stage;
