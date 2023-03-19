export const generateBorderAttributes = (controlName, defaults = {}) => {
	const { defaultBorder } = defaults;
	const defaultValues = defaultBorder ? defaultBorder : '';

	return {
		[`${controlName}Border`]: {
			type: 'object',
			default: defaultValues,
		},
		[`${controlName}BorderTablet`]: {
			type: 'object',
			default: defaultValues,
		},
		[`${controlName}BorderMobile`]: {
			type: 'object',
			default: defaultValues,
		},
	};
};

// generateBorderStyles
export const generateBorderStyles = (attributes, controlName) => {
	const {
		[`${controlName}Border`]: border,
		[`${controlName}BorderTablet`]: borderTablet,
		[`${controlName}BorderMobile`]: borderMobile,
	} = attributes;

	const desktopBorderStyle = border
		? `
            ${
				border?.width && border?.width !== 'undefined'
					? 'border-width:' + border.width + ';'
					: ''
			}
            ${
				border?.style && border?.style !== 'undefined'
					? 'border-style:' + border.style + ';'
					: ''
			}
            ${
				border?.color && border?.color !== 'undefined'
					? 'border-color:' + border.color + ';'
					: ''
			}

            ${
				border?.top?.width && border?.top?.width !== 'undefined'
					? 'border-top-width:' + border.top.width + ';'
					: ''
			}
            ${
				border?.top?.style && border?.top?.style !== 'undefined'
					? 'border-top-style:' + border.top.style + ';'
					: ''
			}
            ${
				border?.top?.color && border?.top?.color !== 'undefined'
					? 'border-top-color:' + border.top.color + ';'
					: ''
			}

            ${
				border?.right?.width && border?.right?.width !== 'undefined'
					? 'border-right-width:' + border.right.width + ';'
					: ''
			}
            ${
				border?.right?.style && border?.right?.style !== 'undefined'
					? 'border-right-style:' + border.right.style + ';'
					: ''
			}
            ${
				border?.right?.color && border?.right?.color !== 'undefined'
					? 'border-right-color:' + border.right.color + ';'
					: ''
			}

            ${
				border?.bottom?.width && border?.bottom?.width !== 'undefined'
					? 'border-bottom-width:' + border.bottom.width + ';'
					: ''
			}
            ${
				border?.bottom?.style && border?.bottom?.style !== 'undefined'
					? 'border-bottom-style:' + border.bottom.style + ';'
					: ''
			}
            ${
				border?.bottom?.color && border?.bottom?.color !== 'undefined'
					? 'border-bottom-color:' + border.bottom.color + ';'
					: ''
			}

            ${
				border?.left?.width && border?.left?.width !== 'undefined'
					? 'border-left-width:' + border.left.width + ';'
					: ''
			}
            ${
				border?.left?.style && border?.left?.style !== 'undefined'
					? 'border-left-style:' + border.left.style + ';'
					: ''
			}
            ${
				border?.left?.color && border?.left?.color !== 'undefined'
					? 'border-left-color:' + border.left.color + ';'
					: ''
			}
          `
		: '';

	const tabletBorderStyle = borderTablet
		? `
            ${
				borderTablet?.width && borderTablet?.width !== 'undefined'
					? 'border-width:' + borderTablet.width + ';'
					: ''
			}
            ${
				borderTablet?.style && borderTablet?.style !== 'undefined'
					? 'border-style:' + borderTablet.style + ';'
					: ''
			}
            ${
				borderTablet?.color && borderTablet?.color !== 'undefined'
					? 'border-color:' + borderTablet.color + ';'
					: ''
			}

            ${
				borderTablet?.top?.width &&
				borderTablet?.top?.width !== 'undefined'
					? 'border-top-width:' + borderTablet.top.width + ';'
					: ''
			}
            ${
				borderTablet?.top?.style &&
				borderTablet?.top?.style !== 'undefined'
					? 'border-top-style:' + borderTablet.top.style + ';'
					: ''
			}
            ${
				borderTablet?.top?.color &&
				borderTablet?.top?.color !== 'undefined'
					? 'border-top-color:' + borderTablet.top.color + ';'
					: ''
			}
            
            ${
				borderTablet?.right?.width &&
				borderTablet?.right?.width !== 'undefined'
					? 'border-right-width:' + borderTablet.right.width + ';'
					: ''
			}
            ${
				borderTablet?.right?.style &&
				borderTablet?.right?.style !== 'undefined'
					? 'border-right-style:' + borderTablet.right.style + ';'
					: ''
			}
            ${
				borderTablet?.right?.color &&
				borderTablet?.right?.color !== 'undefined'
					? 'border-right-color:' + borderTablet.right.color + ';'
					: ''
			}

            ${
				borderTablet?.bottom?.width &&
				borderTablet?.bottom?.width !== 'undefined'
					? 'border-bottom-width:' + borderTablet.bottom.width + ';'
					: ''
			}
            ${
				borderTablet?.bottom?.style &&
				borderTablet?.bottom?.style !== 'undefined'
					? 'border-bottom-style:' + borderTablet.bottom.style + ';'
					: ''
			}
            ${
				borderTablet?.bottom?.color &&
				borderTablet?.bottom?.color !== 'undefined'
					? 'border-bottom-color:' + borderTablet.bottom.color + ';'
					: ''
			}

            ${
				borderTablet?.left?.width &&
				borderTablet?.left?.width !== 'undefined'
					? 'border-left-width:' + borderTablet.left.width + ';'
					: ''
			}
            ${
				borderTablet?.left?.style &&
				borderTablet?.left?.style !== 'undefined'
					? 'border-left-style:' + borderTablet.left.style + ';'
					: ''
			}
            ${
				borderTablet?.left?.color &&
				borderTablet?.left?.color !== 'undefined'
					? 'border-left-color:' + borderTablet.left.color + ';'
					: ''
			}
        `
		: '';

	const mobileBorderStyle = borderMobile
		? `
            ${
				borderMobile?.width && borderMobile?.width !== 'undefined'
					? 'border-width:' + borderMobile.width + ';'
					: ''
			}
            ${
				borderMobile?.style && borderMobile?.style !== 'undefined'
					? 'border-style:' + borderMobile.style + ';'
					: ''
			}
            ${
				borderMobile?.color && borderMobile?.color !== 'undefined'
					? 'border-color:' + borderMobile.color + ';'
					: ''
			}

            ${
				borderMobile?.top?.width &&
				borderMobile?.top?.width !== 'undefined'
					? 'border-top-width:' + borderMobile.top.width + ';'
					: ''
			}
            ${
				borderMobile?.top?.style &&
				borderMobile?.top?.style !== 'undefined'
					? 'border-top-style:' + borderMobile.top.style + ';'
					: ''
			}
            ${
				borderMobile?.top?.color &&
				borderMobile?.top?.color !== 'undefined'
					? 'border-top-color:' + borderMobile.top.color + ';'
					: ''
			}

            ${
				borderMobile?.right?.width &&
				borderMobile?.right?.width !== 'undefined'
					? 'border-right-width:' + borderMobile.right.width + ';'
					: ''
			}
            ${
				borderMobile?.right?.style &&
				borderMobile?.right?.style !== 'undefined'
					? 'border-right-style:' + borderMobile.right.style + ';'
					: ''
			}
            ${
				borderMobile?.right?.color &&
				borderMobile?.right?.color !== 'undefined'
					? 'border-right-color:' + borderMobile.right.color + ';'
					: ''
			}

            ${
				borderMobile?.bottom?.width &&
				borderMobile?.bottom?.width !== 'undefined'
					? 'border-bottom-width:' + borderMobile.bottom.width + ';'
					: ''
			}
            ${
				borderMobile?.bottom?.style &&
				borderMobile?.bottom?.style !== 'undefined'
					? 'border-bottom-style:' + borderMobile.bottom.style + ';'
					: ''
			}
            ${
				borderMobile?.bottom?.color &&
				borderMobile?.bottom?.color !== 'undefined'
					? 'border-bottom-color:' + borderMobile.bottom.color + ';'
					: ''
			}

            ${
				borderMobile?.left?.width &&
				borderMobile?.left?.width !== 'undefined'
					? 'border-left-width:' + borderMobile.left.width + ';'
					: ''
			}
            ${
				borderMobile?.left?.style &&
				borderMobile?.left?.style !== 'undefined'
					? 'border-left-style:' + borderMobile.left.style + ';'
					: ''
			}
            ${
				borderMobile?.left?.color &&
				borderMobile?.left?.color !== 'undefined'
					? 'border-left-color:' + borderMobile.left.color + ';'
					: ''
			}
        `
		: '';

	return { desktopBorderStyle, tabletBorderStyle, mobileBorderStyle };
};
