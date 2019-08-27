import React, { useState } from 'react';
import styled from 'styled-components';

import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';
import { useInterval } from './../hooks/useInterval';

import Stage from './Stage';
import Dispay from './Display';
import StartButton from './StartButton';
import bgImage from '../images/bg.png';
import Display from './Display';
import { createStage, checkCollision } from './../util/helpers';

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
		[ player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer(),
		[ stage, setStage ] = useStage( player, resetPlayer );

	console.log( 're-render' );

	const movePlayer = dir => {
		if ( !checkCollision( player, stage, { x: dir, y: 0 } ) ) {
			updatePlayerPos( { x: dir, y: 0 } );
		}
	};

	const startGame = () => {
		setStage( createStage() );
		setDropTime( 1000 );
		resetPlayer();
		setGameOver( false );
	};

	const drop = () => {
		if ( !checkCollision( player, stage, { x: 0, y: 1 } ) ) {
			updatePlayerPos( { x: 0, y: 1, collided: false } );
		} else {
			if ( player.pos.y < 1 ) {
				console.log( 'Game over!' );

				setGameOver( true );
				setDropTime( null );
			}
			updatePlayerPos( { x: 0, y: 0, collided: true } );
		}
	};

	const keyUp = ( { keyCode } ) => {
		if ( !gameOver ) {
			if ( keyCode === 40 ) {
				setDropTime( 1000 );
			}
		}
	};

	const dropPlayer = () => {
		setDropTime( null );
		drop();
	};

	const move = ( { keyCode } ) => {
		if ( !gameOver ) {
			if ( keyCode === 37 ) {
				// left arrow
				movePlayer( -1 );
			} else if ( keyCode === 39 ) {
				// right arrow
				movePlayer( 1 );
			} else if ( keyCode === 40 ) {
				// down arrow
				dropPlayer();
			} else if ( keyCode === 38 ) {
				// up arrow
				playerRotate( stage, 1 );
			}
		}
	};

	useInterval( () => {
		drop();
	}, dropTime );

	return (
		<StyledWrapper role="button" tabIndex="0" onKeyDown={e => move( e )} onKeyUp={keyUp}>
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
