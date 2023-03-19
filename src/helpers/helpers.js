/**
 * WordPress dependencies
 */
import { select } from '@wordpress/data';

export const handleUniqueId = ({
	BLOCK_PREFIX,
	uniqueId,
	setAttributes,
	clientId,
}) => {
	if (!uniqueId) {
		setAttributes({
			uniqueId: BLOCK_PREFIX + '-' + clientId.slice(0, 8),
		});
	}

	// fix duplicate id
	const allBlocks = select('core/block-editor').getBlocks();
	let duplicateFound = false;
	allBlocks.forEach((block) => {
		if (block.clientId !== clientId) {
			if (block.attributes.uniqueId === uniqueId) {
				duplicateFound = true;
			}
		}
	});
	if (duplicateFound) {
		setAttributes({
			uniqueId: BLOCK_PREFIX + '-' + clientId.slice(0, 8),
		});
	}
};

// soft minify css
export const softMinifyCSS = (css = ' ') =>
	css
		.replace(/\s+/g, ' ')
		.replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
