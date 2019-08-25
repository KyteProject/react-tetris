import { useState, useCallback } from 'react';

import { SHAPES, randomShape } from '../util/shapes';
import { stageWidth } from '../util/helpers';

export const usePlayer = () => {
	const [ player, setPlayer ] = useState( {
		pos: { x: 0, y: 0 },
		shape: SHAPES[ '0' ].shape,
		collided: false
	} );

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

	return [ player, updatePlayerPos, resetPlayer ];
};
