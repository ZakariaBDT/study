import { useBlockProps, RichText } from '@wordpress/block-editor';
import { handleUniqueId, softMinifyCSS } from '../../helpers/helpers';
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

	// title color
	const titleColor = `
		.bootstrap-blocks-${uniqueId} .bootstrap-blocks-heading {
			color: ${color};
		}
	`;

	const allDesktopStyles = `
		${titleColor}
	`;

	// set all styles to "blockStyle" attribute
	useEffect(() => {
		setAttributes({ blockStyle: softMinifyCSS(allDesktopStyles) });
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCSS(allDesktopStyles)}`}</style>
			<Inspector {...{ attributes, setAttributes }} />
			<div
				{...useBlockProps({
					className: `bootstrap-blocks-${uniqueId}`,
				})}
			>
				<RichText
					tagName="h4"
					className="bootstrap-blocks-heading"
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
