import React, { useState } from 'react';

import { randomShape } from '../util/shapes';

export const usePlayer = () => {
	const [ player, setPlayer ] = useState( {
		pos: { x: 0, y: 0 },
		shape: randomShape().shape,
		collided: false
	} );

	return [ player ];
};
