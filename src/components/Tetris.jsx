import React from 'react';
import styled from 'styled-components';

import Stage from './Stage';
import Dispay from './Display';
import StartButton from './StartButton';
import { createStage } from '../util/helpers';
import bgImage from '../images/bg.png';

const StyledWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${bgImage}) #000;
	background-size: cover;
	overflow: hidden;
`;

const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 40px;
	margin: 0 auto;
	max-width: 900px;
	aside {
		width: 100%;
		max-width: 200px;
		display: block;
		padding: 0 20px;
	}
`;

const Tetris = () => {
	return (
		<StyledWrapper>
			<StyledTetris>
				<Stage stage={createStage()} />
				<aside>
					<div>
						<Dispay text="Score" />
						<Dispay text="Rows" />
						<Dispay text="Level" />
					</div>
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledWrapper>
	);
};

export default Tetris;
