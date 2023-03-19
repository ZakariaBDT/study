import { generateBorderAttributes } from '../../helpers/border-help';
import { CONTROL_NAME } from './constant';

const attributes = {
	uniqueId: {
		type: 'string',
	},
	content: {
		type: 'string',
		default: 'Hello World!',
	},
	color: {
		type: 'string',
		default: '#00ff00',
	},
	blockStyle: {
		type: 'object',
	},
	...generateBorderAttributes(CONTROL_NAME, {
		defaultBorder: {
			color: '#000000',
			width: '1px',
			style: 'solid',
		},
	}),
};

export default attributes;
