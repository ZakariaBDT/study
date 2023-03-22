/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/advanced-button/attributes.js":
/*!**************************************************!*\
  !*** ./src/blocks/advanced-button/attributes.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_border_help__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/border-help */ "./src/helpers/border-help.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/blocks/advanced-button/constant/index.js");


const attributes = {
  uniqueId: {
    type: 'string'
  },
  content: {
    type: 'string',
    default: 'Hello World!'
  },
  color: {
    type: 'string',
    default: '#00ff00'
  },
  blockStyle: {
    type: 'object'
  },
  ...(0,_helpers_border_help__WEBPACK_IMPORTED_MODULE_0__.generateBorderAttributes)(_constant__WEBPACK_IMPORTED_MODULE_1__.CONTROL_NAME, {
    defaultBorder: {
      color: '#000000',
      width: '1px',
      style: 'solid'
    }
  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/advanced-button/constant/index.js":
/*!******************************************************!*\
  !*** ./src/blocks/advanced-button/constant/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTROL_NAME": function() { return /* binding */ CONTROL_NAME; }
/* harmony export */ });
const CONTROL_NAME = 'advancedButton';

/***/ }),

/***/ "./src/blocks/advanced-button/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/advanced-button/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_border_help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/border-help */ "./src/helpers/border-help.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/helpers/helpers.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./src/blocks/advanced-button/constant/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/advanced-button/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/blocks/advanced-button/inspector.js");





const {
  Fragment
} = wp.element; // const { select } = wp.data;

const {
  useEffect
} = wp.element; // editor style

 // import inspector


function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    content,
    color,
    blockStyle
  } = attributes; // set unique ID

  useEffect(() => {
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.handleUniqueId)({
      BLOCK_PREFIX: 'bootstrap-blocks',
      uniqueId,
      setAttributes,
      clientId
    });
  }, []);
  const {
    desktopBorderStyle: borderStyleDesktop,
    tabletBorderStyle: borderStyleTablet,
    mobileBorderStyle: borderStyleMobile
  } = (0,_helpers_border_help__WEBPACK_IMPORTED_MODULE_2__.generateBorderStyles)(attributes, _constant__WEBPACK_IMPORTED_MODULE_4__.CONTROL_NAME); // set title color

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
	`; // desktopStyle

  const allDesktopStyles = `
			${titleColor}
			${titleBorderDesktop}
	`; // tabletStyle

  const allTabletStyles = `
		@media all and (max-width: 1024px) {
			${titleBorderTablet}
		}
	`; // mobileStyle

  const allMobileStyles = `
		@media all and (max-width: 767px) {
			${titleBorderMobile}
		}
	`; // allStyles

  const allStyles = `
		${allDesktopStyles}
		${allTabletStyles}
		${allMobileStyles}
	`; // set all styles to "blockStyle" attribute

  useEffect(() => {
    setAttributes({
      blockStyle: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.softMinifyCSS)(allStyles)
    });
  }, [attributes]); // generateBorderStyles
  // console.log('borderStyleDesktop', borderStyleDesktop);
  // console.log('borderStyleTablet', borderStyleTablet);
  // console.log('borderStyleMobile', borderStyleMobile);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.softMinifyCSS)(allStyles)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes,
    setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bootstrap-blocks-${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h4",
    className: `bootstrap-blocks-heading-${uniqueId}`,
    value: content,
    onChange: newContent => setAttributes({
      content: newContent
    }) // style={{ color }}

  })));
}

/***/ }),

/***/ "./src/blocks/advanced-button/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/advanced-button/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/advanced-button/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/advanced-button/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-button/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/advanced-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/advanced-button/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/advanced-button/inspector.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-button/inspector.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_colorcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/colorcontrol */ "./src/controls/colorcontrol/index.js");
/* harmony import */ var _controls_bordercontrol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../controls/bordercontrol */ "./src/controls/bordercontrol/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constant */ "./src/blocks/advanced-button/constant/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-button/attributes.js");


/* eslint-disable @wordpress/no-unsafe-wp-apis */

/**
 * WordPress dependencies
 */


 // import objAttributes from './attributes';

/**
 * Internal dependencies
 */


 // const { BorderControl } = window.boilerplate;

 // import { generateBorderStyles } from '../../helpers/border-help';
// import { CONTROL_NAME } from './constant';
// add BorderControl
// const { BorderControl } = window.boilerplate;



const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    color,
    resMode
  } = attributes; // console.log(attributes);
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

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'boilerplate'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_bordercontrol__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'boilerplate'),
    controlName: _constant__WEBPACK_IMPORTED_MODULE_6__.CONTROL_NAME,
    resRequiredProps: {
      attributes,
      setAttributes,
      resMode,
      objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_7__["default"]
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'boilerplate'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_colorcontrol__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'boilerplate') // defaultColor="#000000"
    ,
    color: color,
    onChange: newColor => setAttributes({
      color: newColor
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/advanced-button/save.js":
/*!********************************************!*\
  !*** ./src/blocks/advanced-button/save.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// import { __ } from '@wordpress/i18n';


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    content,
    color,
    blockStyle
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    className: `bootstrap-blocks-heading-${uniqueId}`,
    value: content
  })));
}

/***/ }),

/***/ "./src/blocks/bootstrap/attributes.js":
/*!********************************************!*\
  !*** ./src/blocks/bootstrap/attributes.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const attributes = {
  uniqueId: {
    type: 'string'
  },
  content: {
    type: 'string',
    default: 'Hello World!'
  },
  color: {
    type: 'string',
    default: '#00ff00'
  },
  blockStyle: {
    type: 'object'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/blocks/bootstrap/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/bootstrap/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers */ "./src/helpers/helpers.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/bootstrap/editor.scss");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/bootstrap/inspector.js");



const {
  Fragment
} = wp.element; // const { select } = wp.data;

const {
  useEffect
} = wp.element; // editor style

 // import inspector


function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    content,
    color,
    blockStyle
  } = attributes; // set unique ID

  useEffect(() => {
    (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.handleUniqueId)({
      BLOCK_PREFIX: 'bootstrap-blocks',
      uniqueId,
      setAttributes,
      clientId
    });
  }, []); // title color

  const titleColor = `
		.bootstrap-blocks-${uniqueId} .bootstrap-blocks-heading {
			color: ${color};
		}
	`;
  const allDesktopStyles = `
		${titleColor}
	`; // set all styles to "blockStyle" attribute

  useEffect(() => {
    setAttributes({
      blockStyle: (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.softMinifyCSS)(allDesktopStyles)
    });
  }, [attributes]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `${(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.softMinifyCSS)(allDesktopStyles)}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes,
    setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: `bootstrap-blocks-${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h4",
    className: "bootstrap-blocks-heading",
    value: content,
    onChange: newContent => setAttributes({
      content: newContent
    }) // style={{ color }}

  })));
}

/***/ }),

/***/ "./src/blocks/bootstrap/index.js":
/*!***************************************!*\
  !*** ./src/blocks/bootstrap/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/bootstrap/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/bootstrap/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/blocks/bootstrap/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/bootstrap/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/bootstrap/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/bootstrap/inspector.js":
/*!*******************************************!*\
  !*** ./src/blocks/bootstrap/inspector.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_colorcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/colorcontrol */ "./src/controls/colorcontrol/index.js");


/**
 * WordPress dependencies
 */


 // import objAttributes from './attributes';

/**
 * Internal dependencies
 */



const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    color
  } = attributes; // console.log('attributes', attributes);
  // console.log('obj attributes: ', objAttributes);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'boilerplate'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_colorcontrol__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'boilerplate') // defaultColor="#000000"
    ,
    color: color,
    onChange: newColor => setAttributes({
      color: newColor
    })
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/blocks/bootstrap/save.js":
/*!**************************************!*\
  !*** ./src/blocks/bootstrap/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// import { __ } from '@wordpress/i18n';


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    content,
    color,
    blockStyle
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `bootstrap-blocks-${uniqueId}`
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h4",
    className: "bootstrap-blocks-heading",
    value: content
  })));
}

/***/ }),

/***/ "./src/controls/bordercontrol/index.js":
/*!*********************************************!*\
  !*** ./src/controls/bordercontrol/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _with_res_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../with-res-btn */ "./src/controls/with-res-btn/index.js");


/* eslint-disable @wordpress/no-unsafe-wp-apis */



const BorderControl = _ref => {
  let {
    label,
    controlName,
    resRequiredProps
  } = _ref;
  const {
    attributes,
    setAttributes,
    resMode
  } = resRequiredProps;
  const borderAttr = resMode === 'Desktop' ? `${controlName}Border` : `${controlName}Border${resMode}`;
  const borderVal = attributes[borderAttr];

  const setSettings = val => {
    setAttributes({
      [borderAttr]: val
    });
  }; // console.log(borderAttr);


  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "border-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_with_res_btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
    resRequiredProps: resRequiredProps,
    label: label
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    value: borderVal,
    onChange: newBorder => {
      setSettings(newBorder);
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BorderControl);

/***/ }),

/***/ "./src/controls/colorcontrol/index.js":
/*!********************************************!*\
  !*** ./src/controls/colorcontrol/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colorcontrol_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colorcontrol.scss */ "./src/controls/colorcontrol/colorcontrol.scss");


/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/**
 * WordPress dependencies
 */


const colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: 'white',
  border: '1px solid #ebebeb'
};
const colorStyles = {
  height: 16,
  width: 16,
  borderRadius: '0%',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)'
}; // import style



const ColorControl = _ref => {
  let {
    label,
    defaultColor,
    color,
    onChange
  } = _ref;
  const [bgColor, setBgColor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onChange(bgColor);
  }, [bgColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setBgColor(color || defaultColor);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-color-control-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: label || '',
    className: "color-label",
    id: "color-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    renderToggle: _ref2 => {
      let {
        isOpen,
        onToggle
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
        text: bgColor || 'default'
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "color-ball",
        style: colorBallStyles
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: { ...colorStyles,
          backgroundColor: bgColor
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || 'default'
      })));
    },
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
      color: bgColor,
      onChangeComplete: _ref3 => {
        let {
          rgb
        } = _ref3;
        setBgColor(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    isSmall: true,
    className: "zb-reset-button",
    icon: "image-rotate",
    style: {
      transform: 'scaleX(-1) rotate(90deg)'
    },
    onClick: () => {
      setBgColor(defaultColor);
    },
    disabled: !bgColor
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./src/controls/with-res-btn/index.js":
/*!********************************************!*\
  !*** ./src/controls/with-res-btn/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_res_preview_btns_help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/res-preview-btns-help */ "./src/helpers/res-preview-btns-help.js");


/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */


const WithResDeviceBtn = _ref => {
  let {
    label,
    resRequiredProps,
    children,
    className
  } = _ref;
  const {
    resMode,
    setAttributes
  } = resRequiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `zb-res-device-btn-wrapper ${className || ' '}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "zb-res-device-btns"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "res-btn-label"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-desktop ${resMode === 'Desktop' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_res_preview_btns_help__WEBPACK_IMPORTED_MODULE_1__.onDesktopBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-tablet ${resMode === 'Tablet' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_res_preview_btns_help__WEBPACK_IMPORTED_MODULE_1__.onTabletBtnClick)({
      setAttributes
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `res-btn dashicons dashicons-smartphone ${resMode === 'Mobile' ? 'active' : ' '}`,
    onClick: () => (0,_helpers_res_preview_btns_help__WEBPACK_IMPORTED_MODULE_1__.onMobileBtnClick)({
      setAttributes
    })
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (WithResDeviceBtn);

/***/ }),

/***/ "./src/global/hooks/index.js":
/*!***********************************!*\
  !*** ./src/global/hooks/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

/**
 * add attributes to block
 */

function addAttributes(settings) {
  if (typeof settings.attributes === 'undefined') {
    return settings;
  }

  if (settings.category && settings.category === 'boilerplate') {
    settings.attributes = { ...settings.attributes,
      resMode: {
        type: 'string',
        default: 'Desktop'
      }
    };
  }

  return settings;
}

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'boilerplate/attributes', addAttributes);

/***/ }),

/***/ "./src/helpers/border-help.js":
/*!************************************!*\
  !*** ./src/helpers/border-help.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBorderAttributes": function() { return /* binding */ generateBorderAttributes; },
/* harmony export */   "generateBorderStyles": function() { return /* binding */ generateBorderStyles; }
/* harmony export */ });
const generateBorderAttributes = function (controlName) {
  let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    defaultBorder
  } = defaults;
  const defaultValues = defaultBorder ? defaultBorder : '';
  return {
    [`${controlName}Border`]: {
      type: 'object',
      default: defaultValues
    },
    [`${controlName}BorderTablet`]: {
      type: 'object',
      default: defaultValues
    },
    [`${controlName}BorderMobile`]: {
      type: 'object',
      default: defaultValues
    }
  };
}; // generateBorderStyles

const generateBorderStyles = (attributes, controlName) => {
  var _border$top, _border$top2, _border$top3, _border$top4, _border$top5, _border$top6, _border$right, _border$right2, _border$right3, _border$right4, _border$right5, _border$right6, _border$bottom, _border$bottom2, _border$bottom3, _border$bottom4, _border$bottom5, _border$bottom6, _border$left, _border$left2, _border$left3, _border$left4, _border$left5, _border$left6, _borderTablet$top, _borderTablet$top2, _borderTablet$top3, _borderTablet$top4, _borderTablet$top5, _borderTablet$top6, _borderTablet$right, _borderTablet$right2, _borderTablet$right3, _borderTablet$right4, _borderTablet$right5, _borderTablet$right6, _borderTablet$bottom, _borderTablet$bottom2, _borderTablet$bottom3, _borderTablet$bottom4, _borderTablet$bottom5, _borderTablet$bottom6, _borderTablet$left, _borderTablet$left2, _borderTablet$left3, _borderTablet$left4, _borderTablet$left5, _borderTablet$left6, _borderMobile$top, _borderMobile$top2, _borderMobile$top3, _borderMobile$top4, _borderMobile$top5, _borderMobile$top6, _borderMobile$right, _borderMobile$right2, _borderMobile$right3, _borderMobile$right4, _borderMobile$right5, _borderMobile$right6, _borderMobile$bottom, _borderMobile$bottom2, _borderMobile$bottom3, _borderMobile$bottom4, _borderMobile$bottom5, _borderMobile$bottom6, _borderMobile$left, _borderMobile$left2, _borderMobile$left3, _borderMobile$left4, _borderMobile$left5, _borderMobile$left6;

  const {
    [`${controlName}Border`]: border,
    [`${controlName}BorderTablet`]: borderTablet,
    [`${controlName}BorderMobile`]: borderMobile
  } = attributes;
  const desktopBorderStyle = border ? `
            ${border !== null && border !== void 0 && border.width && (border === null || border === void 0 ? void 0 : border.width) !== 'undefined' ? 'border-width:' + border.width + ';' : ''}
            ${border !== null && border !== void 0 && border.style && (border === null || border === void 0 ? void 0 : border.style) !== 'undefined' ? 'border-style:' + border.style + ';' : ''}
            ${border !== null && border !== void 0 && border.color && (border === null || border === void 0 ? void 0 : border.color) !== 'undefined' ? 'border-color:' + border.color + ';' : ''}

            ${border !== null && border !== void 0 && (_border$top = border.top) !== null && _border$top !== void 0 && _border$top.width && (border === null || border === void 0 ? void 0 : (_border$top2 = border.top) === null || _border$top2 === void 0 ? void 0 : _border$top2.width) !== 'undefined' ? 'border-top-width:' + border.top.width + ';' : ''}
            ${border !== null && border !== void 0 && (_border$top3 = border.top) !== null && _border$top3 !== void 0 && _border$top3.style && (border === null || border === void 0 ? void 0 : (_border$top4 = border.top) === null || _border$top4 === void 0 ? void 0 : _border$top4.style) !== 'undefined' ? 'border-top-style:' + border.top.style + ';' : ''}
            ${border !== null && border !== void 0 && (_border$top5 = border.top) !== null && _border$top5 !== void 0 && _border$top5.color && (border === null || border === void 0 ? void 0 : (_border$top6 = border.top) === null || _border$top6 === void 0 ? void 0 : _border$top6.color) !== 'undefined' ? 'border-top-color:' + border.top.color + ';' : ''}

            ${border !== null && border !== void 0 && (_border$right = border.right) !== null && _border$right !== void 0 && _border$right.width && (border === null || border === void 0 ? void 0 : (_border$right2 = border.right) === null || _border$right2 === void 0 ? void 0 : _border$right2.width) !== 'undefined' ? 'border-right-width:' + border.right.width + ';' : ''}
            ${border !== null && border !== void 0 && (_border$right3 = border.right) !== null && _border$right3 !== void 0 && _border$right3.style && (border === null || border === void 0 ? void 0 : (_border$right4 = border.right) === null || _border$right4 === void 0 ? void 0 : _border$right4.style) !== 'undefined' ? 'border-right-style:' + border.right.style + ';' : ''}
            ${border !== null && border !== void 0 && (_border$right5 = border.right) !== null && _border$right5 !== void 0 && _border$right5.color && (border === null || border === void 0 ? void 0 : (_border$right6 = border.right) === null || _border$right6 === void 0 ? void 0 : _border$right6.color) !== 'undefined' ? 'border-right-color:' + border.right.color + ';' : ''}

            ${border !== null && border !== void 0 && (_border$bottom = border.bottom) !== null && _border$bottom !== void 0 && _border$bottom.width && (border === null || border === void 0 ? void 0 : (_border$bottom2 = border.bottom) === null || _border$bottom2 === void 0 ? void 0 : _border$bottom2.width) !== 'undefined' ? 'border-bottom-width:' + border.bottom.width + ';' : ''}
            ${border !== null && border !== void 0 && (_border$bottom3 = border.bottom) !== null && _border$bottom3 !== void 0 && _border$bottom3.style && (border === null || border === void 0 ? void 0 : (_border$bottom4 = border.bottom) === null || _border$bottom4 === void 0 ? void 0 : _border$bottom4.style) !== 'undefined' ? 'border-bottom-style:' + border.bottom.style + ';' : ''}
            ${border !== null && border !== void 0 && (_border$bottom5 = border.bottom) !== null && _border$bottom5 !== void 0 && _border$bottom5.color && (border === null || border === void 0 ? void 0 : (_border$bottom6 = border.bottom) === null || _border$bottom6 === void 0 ? void 0 : _border$bottom6.color) !== 'undefined' ? 'border-bottom-color:' + border.bottom.color + ';' : ''}

            ${border !== null && border !== void 0 && (_border$left = border.left) !== null && _border$left !== void 0 && _border$left.width && (border === null || border === void 0 ? void 0 : (_border$left2 = border.left) === null || _border$left2 === void 0 ? void 0 : _border$left2.width) !== 'undefined' ? 'border-left-width:' + border.left.width + ';' : ''}
            ${border !== null && border !== void 0 && (_border$left3 = border.left) !== null && _border$left3 !== void 0 && _border$left3.style && (border === null || border === void 0 ? void 0 : (_border$left4 = border.left) === null || _border$left4 === void 0 ? void 0 : _border$left4.style) !== 'undefined' ? 'border-left-style:' + border.left.style + ';' : ''}
            ${border !== null && border !== void 0 && (_border$left5 = border.left) !== null && _border$left5 !== void 0 && _border$left5.color && (border === null || border === void 0 ? void 0 : (_border$left6 = border.left) === null || _border$left6 === void 0 ? void 0 : _border$left6.color) !== 'undefined' ? 'border-left-color:' + border.left.color + ';' : ''}
          ` : '';
  const tabletBorderStyle = borderTablet ? `
            ${borderTablet !== null && borderTablet !== void 0 && borderTablet.width && (borderTablet === null || borderTablet === void 0 ? void 0 : borderTablet.width) !== 'undefined' ? 'border-width:' + borderTablet.width + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && borderTablet.style && (borderTablet === null || borderTablet === void 0 ? void 0 : borderTablet.style) !== 'undefined' ? 'border-style:' + borderTablet.style + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && borderTablet.color && (borderTablet === null || borderTablet === void 0 ? void 0 : borderTablet.color) !== 'undefined' ? 'border-color:' + borderTablet.color + ';' : ''}

            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$top = borderTablet.top) !== null && _borderTablet$top !== void 0 && _borderTablet$top.width && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$top2 = borderTablet.top) === null || _borderTablet$top2 === void 0 ? void 0 : _borderTablet$top2.width) !== 'undefined' ? 'border-top-width:' + borderTablet.top.width + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$top3 = borderTablet.top) !== null && _borderTablet$top3 !== void 0 && _borderTablet$top3.style && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$top4 = borderTablet.top) === null || _borderTablet$top4 === void 0 ? void 0 : _borderTablet$top4.style) !== 'undefined' ? 'border-top-style:' + borderTablet.top.style + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$top5 = borderTablet.top) !== null && _borderTablet$top5 !== void 0 && _borderTablet$top5.color && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$top6 = borderTablet.top) === null || _borderTablet$top6 === void 0 ? void 0 : _borderTablet$top6.color) !== 'undefined' ? 'border-top-color:' + borderTablet.top.color + ';' : ''}
            
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$right = borderTablet.right) !== null && _borderTablet$right !== void 0 && _borderTablet$right.width && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$right2 = borderTablet.right) === null || _borderTablet$right2 === void 0 ? void 0 : _borderTablet$right2.width) !== 'undefined' ? 'border-right-width:' + borderTablet.right.width + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$right3 = borderTablet.right) !== null && _borderTablet$right3 !== void 0 && _borderTablet$right3.style && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$right4 = borderTablet.right) === null || _borderTablet$right4 === void 0 ? void 0 : _borderTablet$right4.style) !== 'undefined' ? 'border-right-style:' + borderTablet.right.style + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$right5 = borderTablet.right) !== null && _borderTablet$right5 !== void 0 && _borderTablet$right5.color && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$right6 = borderTablet.right) === null || _borderTablet$right6 === void 0 ? void 0 : _borderTablet$right6.color) !== 'undefined' ? 'border-right-color:' + borderTablet.right.color + ';' : ''}

            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$bottom = borderTablet.bottom) !== null && _borderTablet$bottom !== void 0 && _borderTablet$bottom.width && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$bottom2 = borderTablet.bottom) === null || _borderTablet$bottom2 === void 0 ? void 0 : _borderTablet$bottom2.width) !== 'undefined' ? 'border-bottom-width:' + borderTablet.bottom.width + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$bottom3 = borderTablet.bottom) !== null && _borderTablet$bottom3 !== void 0 && _borderTablet$bottom3.style && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$bottom4 = borderTablet.bottom) === null || _borderTablet$bottom4 === void 0 ? void 0 : _borderTablet$bottom4.style) !== 'undefined' ? 'border-bottom-style:' + borderTablet.bottom.style + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$bottom5 = borderTablet.bottom) !== null && _borderTablet$bottom5 !== void 0 && _borderTablet$bottom5.color && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$bottom6 = borderTablet.bottom) === null || _borderTablet$bottom6 === void 0 ? void 0 : _borderTablet$bottom6.color) !== 'undefined' ? 'border-bottom-color:' + borderTablet.bottom.color + ';' : ''}

            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$left = borderTablet.left) !== null && _borderTablet$left !== void 0 && _borderTablet$left.width && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$left2 = borderTablet.left) === null || _borderTablet$left2 === void 0 ? void 0 : _borderTablet$left2.width) !== 'undefined' ? 'border-left-width:' + borderTablet.left.width + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$left3 = borderTablet.left) !== null && _borderTablet$left3 !== void 0 && _borderTablet$left3.style && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$left4 = borderTablet.left) === null || _borderTablet$left4 === void 0 ? void 0 : _borderTablet$left4.style) !== 'undefined' ? 'border-left-style:' + borderTablet.left.style + ';' : ''}
            ${borderTablet !== null && borderTablet !== void 0 && (_borderTablet$left5 = borderTablet.left) !== null && _borderTablet$left5 !== void 0 && _borderTablet$left5.color && (borderTablet === null || borderTablet === void 0 ? void 0 : (_borderTablet$left6 = borderTablet.left) === null || _borderTablet$left6 === void 0 ? void 0 : _borderTablet$left6.color) !== 'undefined' ? 'border-left-color:' + borderTablet.left.color + ';' : ''}
        ` : '';
  const mobileBorderStyle = borderMobile ? `
            ${borderMobile !== null && borderMobile !== void 0 && borderMobile.width && (borderMobile === null || borderMobile === void 0 ? void 0 : borderMobile.width) !== 'undefined' ? 'border-width:' + borderMobile.width + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && borderMobile.style && (borderMobile === null || borderMobile === void 0 ? void 0 : borderMobile.style) !== 'undefined' ? 'border-style:' + borderMobile.style + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && borderMobile.color && (borderMobile === null || borderMobile === void 0 ? void 0 : borderMobile.color) !== 'undefined' ? 'border-color:' + borderMobile.color + ';' : ''}

            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$top = borderMobile.top) !== null && _borderMobile$top !== void 0 && _borderMobile$top.width && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$top2 = borderMobile.top) === null || _borderMobile$top2 === void 0 ? void 0 : _borderMobile$top2.width) !== 'undefined' ? 'border-top-width:' + borderMobile.top.width + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$top3 = borderMobile.top) !== null && _borderMobile$top3 !== void 0 && _borderMobile$top3.style && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$top4 = borderMobile.top) === null || _borderMobile$top4 === void 0 ? void 0 : _borderMobile$top4.style) !== 'undefined' ? 'border-top-style:' + borderMobile.top.style + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$top5 = borderMobile.top) !== null && _borderMobile$top5 !== void 0 && _borderMobile$top5.color && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$top6 = borderMobile.top) === null || _borderMobile$top6 === void 0 ? void 0 : _borderMobile$top6.color) !== 'undefined' ? 'border-top-color:' + borderMobile.top.color + ';' : ''}

            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$right = borderMobile.right) !== null && _borderMobile$right !== void 0 && _borderMobile$right.width && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$right2 = borderMobile.right) === null || _borderMobile$right2 === void 0 ? void 0 : _borderMobile$right2.width) !== 'undefined' ? 'border-right-width:' + borderMobile.right.width + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$right3 = borderMobile.right) !== null && _borderMobile$right3 !== void 0 && _borderMobile$right3.style && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$right4 = borderMobile.right) === null || _borderMobile$right4 === void 0 ? void 0 : _borderMobile$right4.style) !== 'undefined' ? 'border-right-style:' + borderMobile.right.style + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$right5 = borderMobile.right) !== null && _borderMobile$right5 !== void 0 && _borderMobile$right5.color && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$right6 = borderMobile.right) === null || _borderMobile$right6 === void 0 ? void 0 : _borderMobile$right6.color) !== 'undefined' ? 'border-right-color:' + borderMobile.right.color + ';' : ''}

            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$bottom = borderMobile.bottom) !== null && _borderMobile$bottom !== void 0 && _borderMobile$bottom.width && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$bottom2 = borderMobile.bottom) === null || _borderMobile$bottom2 === void 0 ? void 0 : _borderMobile$bottom2.width) !== 'undefined' ? 'border-bottom-width:' + borderMobile.bottom.width + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$bottom3 = borderMobile.bottom) !== null && _borderMobile$bottom3 !== void 0 && _borderMobile$bottom3.style && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$bottom4 = borderMobile.bottom) === null || _borderMobile$bottom4 === void 0 ? void 0 : _borderMobile$bottom4.style) !== 'undefined' ? 'border-bottom-style:' + borderMobile.bottom.style + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$bottom5 = borderMobile.bottom) !== null && _borderMobile$bottom5 !== void 0 && _borderMobile$bottom5.color && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$bottom6 = borderMobile.bottom) === null || _borderMobile$bottom6 === void 0 ? void 0 : _borderMobile$bottom6.color) !== 'undefined' ? 'border-bottom-color:' + borderMobile.bottom.color + ';' : ''}

            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$left = borderMobile.left) !== null && _borderMobile$left !== void 0 && _borderMobile$left.width && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$left2 = borderMobile.left) === null || _borderMobile$left2 === void 0 ? void 0 : _borderMobile$left2.width) !== 'undefined' ? 'border-left-width:' + borderMobile.left.width + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$left3 = borderMobile.left) !== null && _borderMobile$left3 !== void 0 && _borderMobile$left3.style && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$left4 = borderMobile.left) === null || _borderMobile$left4 === void 0 ? void 0 : _borderMobile$left4.style) !== 'undefined' ? 'border-left-style:' + borderMobile.left.style + ';' : ''}
            ${borderMobile !== null && borderMobile !== void 0 && (_borderMobile$left5 = borderMobile.left) !== null && _borderMobile$left5 !== void 0 && _borderMobile$left5.color && (borderMobile === null || borderMobile === void 0 ? void 0 : (_borderMobile$left6 = borderMobile.left) === null || _borderMobile$left6 === void 0 ? void 0 : _borderMobile$left6.color) !== 'undefined' ? 'border-left-color:' + borderMobile.left.color + ';' : ''}
        ` : '';
  return {
    desktopBorderStyle,
    tabletBorderStyle,
    mobileBorderStyle
  };
};

/***/ }),

/***/ "./src/helpers/helpers.js":
/*!********************************!*\
  !*** ./src/helpers/helpers.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleUniqueId": function() { return /* binding */ handleUniqueId; },
/* harmony export */   "softMinifyCSS": function() { return /* binding */ softMinifyCSS; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const handleUniqueId = _ref => {
  let {
    BLOCK_PREFIX,
    uniqueId,
    setAttributes,
    clientId
  } = _ref;

  if (!uniqueId) {
    setAttributes({
      uniqueId: BLOCK_PREFIX + '-' + clientId.slice(0, 8)
    });
  } // fix duplicate id


  const allBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/block-editor').getBlocks();
  let duplicateFound = false;
  allBlocks.forEach(block => {
    if (block.clientId !== clientId) {
      if (block.attributes.uniqueId === uniqueId) {
        duplicateFound = true;
      }
    }
  });

  if (duplicateFound) {
    setAttributes({
      uniqueId: BLOCK_PREFIX + '-' + clientId.slice(0, 8)
    });
  }
}; // soft minify css

const softMinifyCSS = function () {
  let css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  return css.replace(/\s+/g, ' ').replace(/\.zb\-[\w\-\s\.\,\:\>\(\)\d\+\[\]\#\>]+\{[\s]+\}/g, '');
};

/***/ }),

/***/ "./src/helpers/res-preview-btns-help.js":
/*!**********************************************!*\
  !*** ./src/helpers/res-preview-btns-help.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onDesktopBtnClick": function() { return /* binding */ onDesktopBtnClick; },
/* harmony export */   "onTabletBtnClick": function() { return /* binding */ onTabletBtnClick; },
/* harmony export */   "onMobileBtnClick": function() { return /* binding */ onMobileBtnClick; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const onDesktopBtnClick = _ref => {
  let {
    setAttributes
  } = _ref;
  setAttributes({
    resMode: 'Desktop'
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
};
const onTabletBtnClick = _ref2 => {
  let {
    setAttributes
  } = _ref2;
  setAttributes({
    resMode: 'Tablet'
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
};
const onMobileBtnClick = _ref3 => {
  let {
    setAttributes
  } = _ref3;
  setAttributes({
    resMode: 'Mobile'
  });

  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/hooks */ "./src/global/hooks/index.js");
/* harmony import */ var _blocks_bootstrap_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/bootstrap/index */ "./src/blocks/bootstrap/index.js");
/* harmony import */ var _blocks_advanced_button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/advanced-button/index */ "./src/blocks/advanced-button/index.js");
// import global hooks

/**
 * Includes all blocks root files
 */




/***/ }),

/***/ "./src/blocks/advanced-button/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/advanced-button/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/advanced-button/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-button/style.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/bootstrap/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/bootstrap/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/bootstrap/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/bootstrap/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/colorcontrol/colorcontrol.scss":
/*!*****************************************************!*\
  !*** ./src/controls/colorcontrol/colorcontrol.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ (function(module) {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/advanced-button/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-button/block.json ***!
  \***********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"brtb/advanced-button","version":"0.1.0","title":"Advanced Button","category":"boilerplate","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"textdomain":"boilerplate","editorScript":"file:../../index.js","editorStyle":"file:../../index.css","style":"file:../../style-index.css"}');

/***/ }),

/***/ "./src/blocks/bootstrap/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/bootstrap/block.json ***!
  \*****************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"brtb/bootstrap","version":"0.1.0","title":"Bootstrap Block","category":"boilerplate","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"textdomain":"boilerplate"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgutenberg_boilerplate"] = self["webpackChunkgutenberg_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map