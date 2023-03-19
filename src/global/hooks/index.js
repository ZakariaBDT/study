/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
/**
 * add attributes to block
 */

function addAttributes(settings) {
	if (typeof settings.attributes === 'undefined') {
		return settings;
	}

	if (settings.category && settings.category === 'boilerplate') {
		settings.attributes = {
			...settings.attributes,
			resMode: {
				type: 'string',
				default: 'Desktop',
			},
		};
	}

	return settings;
}

addFilter('blocks.registerBlockType', 'boilerplate/attributes', addAttributes);
