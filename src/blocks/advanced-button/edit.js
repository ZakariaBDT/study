import { useBlockProps, RichText } from '@wordpress/block-editor';
import { generateBorderStyles } from '../../helpers/border-help';
import { handleUniqueId, softMinifyCSS } from '../../helpers/helpers';
import { CONTROL_NAME } from './constant';
const { Fragment } = wp.element;
// const { select } = wp.data;
const { useEffect } = wp.element;

// editor style
import './editor.scss';

// import inspector
import Inspector from './inspector';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { uniqueId, content, color, blockStyle } = attributes;

	// set unique ID
	useEffect(() => {
		handleUniqueId({
			BLOCK_PREFIX: 'bootstrap-blocks',
			uniqueId,
			setAttributes,
			clientId,
		});
	}, []);

	const {
		desktopBorderStyle: borderStyleDesktop,
		tabletBorderStyle: borderStyleTablet,
		mobileBorderStyle: borderStyleMobile,
	} = generateBorderStyles(attributes, CONTROL_NAME);

	// set title color
	const titleColor = `
		.bootstrap-blocks-heading-${uniqueId} {
			color: ${color};
		}
	`;

	const titleBorderDesktop = `
		.bootstrap-blocks-heading-${uniqueId} {
			${borderStyleDesktop}
		}
	`;

	const titleBorderTablet = `
		.bootstrap-blocks-heading-${uniqueId} {
			${borderStyleTablet}
		}
	`;

	const titleBorderMobile = `
		.bootstrap-blocks-heading-${uniqueId} {
			${borderStyleMobile}
		}
	`;

	// desktopStyle
	const allDesktopStyles = `
			${titleColor}
			${titleBorderDesktop}
	`;

	// tabletStyle
	const allTabletStyles = `
		@media all and (max-width: 1024px) {
			${titleBorderTablet}
		}
	`;

	// mobileStyle
	const allMobileStyles = `
		@media all and (max-width: 767px) {
			${titleBorderMobile}
		}
	`;

	// allStyles
	const allStyles = `
		${allDesktopStyles}
		${allTabletStyles}
		${allMobileStyles}
	`;

	// set all styles to "blockStyle" attribute
	useEffect(() => {
		setAttributes({ blockStyle: softMinifyCSS(allStyles) });
	}, [attributes]);

	// generateBorderStyles

	// console.log('borderStyleDesktop', borderStyleDesktop);
	// console.log('borderStyleTablet', borderStyleTablet);
	// console.log('borderStyleMobile', borderStyleMobile);

	return (
		<Fragment>
			<style>{`${softMinifyCSS(allStyles)}`}</style>
			{/* <style>{allStyles}</style> */}
			<Inspector {...{ attributes, setAttributes }} />
			<div
				{...useBlockProps({
					className: `bootstrap-blocks-${uniqueId}`,
				})}
			>
				<RichText
					tagName="h4"
					className={`bootstrap-blocks-heading-${uniqueId}`}
					value={content}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
					// style={{ color }}
				/>
			</div>
		</Fragment>
	);
}
