import React, { useState } from 'react';
import styled from 'styled-components';

import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';

import Stage from './Stage';
import Dispay from './Display';
import StartButton from './StartButton';
import bgImage from '../images/bg.png';
import Display from './Display';
import { createStage } from './../util/helpers';

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
		[ player, updatePlayerPos, resetPlayer ] = usePlayer(),
		[ stage, setStage ] = useStage( player );

	console.log( 're-render' );

	const movePlayer = dir => {
		updatePlayerPos( { x: dir, y: 0 } );
	};

	const startGame = () => {
		// reset everything
		setStage( createStage() );
		resetPlayer();
	};

	const drop = () => {
		updatePlayerPos( { x: 0, y: 1, collided: false } );
	};

	const dropPlayer = () => {
		drop();
	};

	const move = ( { keyCode } ) => {
		if ( !gameOver ) {
			if ( keyCode === 37 ) {
				movePlayer( -1 );
			} else if ( keyCode === 39 ) {
				movePlayer( -1 );
			} else if ( keyCode === 40 ) {
				dropPlayer();
			}
		}
	};

	return (
		<StyledWrapper role="button" tabIndex="0" onKeyDown={e => move( e )}>
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
					<StartButton callback={startGame} />
				</aside>
			</StyledTetris>
		</StyledWrapper>
	);
};

export default Tetris;
