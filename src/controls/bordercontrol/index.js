/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __experimentalBorderBoxControl as BorderBoxControl } from '@wordpress/components';
import WithResDeviceBtn from '../with-res-btn';

const BorderControl = ({ label, controlName, resRequiredProps }) => {
	const { attributes, setAttributes, resMode } = resRequiredProps;
	const borderAttr =
		resMode === 'Desktop'
			? `${controlName}Border`
			: `${controlName}Border${resMode}`;
	const borderVal = attributes[borderAttr];

	const setSettings = (val) => {
		setAttributes({ [borderAttr]: val });
	};

	// console.log(borderAttr);

	return (
		<div className="border-control-wrapper">
			<WithResDeviceBtn resRequiredProps={resRequiredProps} label={label}>
				<BorderBoxControl
					value={borderVal}
					onChange={(newBorder) => {
						setSettings(newBorder);
					}}
				/>
			</WithResDeviceBtn>
		</div>
	);
};

export default BorderControl;
