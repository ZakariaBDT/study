// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

export default function save({ attributes }) {
	const { uniqueId, content, color, blockStyle } = attributes;
	return (
		<Fragment>
			<div {...useBlockProps.save()}>
				<RichText.Content
					tagName="h4"
					className={`bootstrap-blocks-heading-${uniqueId}`}
					value={content}
				/>
			</div>
		</Fragment>
	);
}
