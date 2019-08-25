import { useState, useCallback } from 'react';

import { SHAPES, randomShape } from '../util/shapes';
import { stageWidth, checkCollision } from '../util/helpers';

export const usePlayer = () => {
	const [ player, setPlayer ] = useState( {
		pos: { x: 0, y: 0 },
		shape: SHAPES[ '0' ].shape,
		collided: false
	} );

	const rotate = ( matrix, dir ) => {
		const rotatedShape = matrix.map( ( _, index ) => matrix.map( col => col[ index ] ) );

		if ( dir > 0 ) {
			return rotatedShape.map( row => row.reverse() );
		}

		return rotatedShape.reverse();
	};

	const playerRotate = ( stage, dir ) => {
		const clonedPlayer = JSON.parse( JSON.stringify( player ) );

		clonedPlayer.shape = rotate( clonedPlayer.shape, dir );

		const pos = clonedPlayer.pos.x;

		let offset = 1;

		while ( checkCollision( clonedPlayer, stage, { x: 0, y: 0 } ) ) {
			clonedPlayer.pos.x += offset;
			offset = -( offset + ( offset > 0 ? 1 : -1 ) );
			if ( offset > clonedPlayer.shape[ 0 ].length ) {
				rotate( clonedPlayer.shape, -dir );
				clonedPlayer.pos.x = pos;
				return;
			}
		}
		setPlayer( clonedPlayer );
	};

	const updatePlayerPos = ( { x, y, collided } ) => {
		setPlayer( prev => ( {
			...prev,
			pos: { x: ( prev.pos.x += x ), y: ( prev.pos.y += y ) },
			collided
		} ) );
	};

	const resetPlayer = useCallback( () => {
		console.log( 'reset player' );
		setPlayer( {
			pos: { x: stageWidth / 2 - 2, y: 0 },
			shape: randomShape().shape,
			collided: false
		} );
	}, [] );

	return [ player, updatePlayerPos, resetPlayer, playerRotate ];
};
