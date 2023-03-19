/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

// import objAttributes from './attributes';

/**
 * Internal dependencies
 */
import ColorControl from '../../controls/colorcontrol';

const Inspector = ({ attributes, setAttributes }) => {
	const { color } = attributes;

	// console.log('attributes', attributes);
	// console.log('obj attributes: ', objAttributes);
	return (
		<InspectorControls>
			<PanelBody title={__('Settings', 'boilerplate')} initialOpen={true}>
				<ColorControl
					label={__('Color', 'boilerplate')}
					// defaultColor="#000000"
					color={color}
					onChange={(newColor) => setAttributes({ color: newColor })}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
