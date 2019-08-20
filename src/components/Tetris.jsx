import React from 'react';

import Stage from './Stage';
import Dispay from './Display';
import StartButton from './StartButton';

const Tetris = () => {
	return (
		<div>
			<Stage />
			<aside>
				<div>
					<Dispay text="Score" />
					<Dispay text="Rows" />
					<Dispay text="Level" />
				</div>
				<StartButton />
			</aside>
		</div>
	);
};

export default Tetris;
