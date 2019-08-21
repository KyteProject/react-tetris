import React, { useState } from 'react';
import styled from 'styled-components';

import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';

import Stage from './Stage';
import Dispay from './Display';
import StartButton from './StartButton';
import bgImage from '../images/bg.png';
import Display from './Display';

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
	const [ dropTime, setDropTime ] = useState( null ),
		[ gameOver, setGameOver ] = useState( false ),
		[ player ] = usePlayer(),
		[ stage, setStage ] = useStage( player );

	console.log( 're-render' );

	return (
		<StyledWrapper>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text="Game Over" />
					) : (
						<div>
							<Dispay text="Score" />
							<Dispay text="Rows" />
							<Dispay text="Level" />
						</div>
					)}
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledWrapper>
	);
};

export default Tetris;
