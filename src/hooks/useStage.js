import { useState } from 'react';
import { createStage } from '../util/helpers';

export const useStage = () => {
	const [ stage, setStage ] = useState( createStage() );

	return [ stage, setStage ];
};
