/* eslint-disable @wordpress/no-unsafe-wp-apis */
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
import BorderControl from '../../controls/bordercontrol';

// const { BorderControl } = window.boilerplate;

import { CONTROL_NAME } from './constant';
// import { generateBorderStyles } from '../../helpers/border-help';
// import { CONTROL_NAME } from './constant';

// add BorderControl
// const { BorderControl } = window.boilerplate;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { color, resMode } = attributes;

	// console.log(attributes);

	// console.log('attributes', attributes);
	// console.log('obj attributes: ', objAttributes);

	// const {
	// 	desktopBorderStyle: buttonBorderDesktop,
	// 	tabletBorderStyle: buttonBorderTablet,
	// 	mobileBorderStyle: buttonBorderMobile,
	// } = generateBorderStyles(attributes, CONTROL_NAME);

	// console.log('buttonBorderDesktop', buttonBorderDesktop);
	// console.log('buttonBorderTablet', buttonBorderTablet);
	// console.log('buttonBorderMobile', buttonBorderMobile);

	return (
		<InspectorControls>
			<PanelBody title={__('Border', 'boilerplate')} initialOpen={true}>
				<BorderControl
					label={__('Border', 'boilerplate')}
					controlName={CONTROL_NAME}
					resRequiredProps={{
						attributes,
						setAttributes,
						resMode,
						objAttributes,
					}}
				/>
			</PanelBody>
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
