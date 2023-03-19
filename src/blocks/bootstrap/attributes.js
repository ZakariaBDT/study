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
};

export default attributes;
