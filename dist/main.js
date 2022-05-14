'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _extends = unwrapExports(_extends_1);

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(objectWithoutPropertiesLoose);

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

var _excluded = ["primary", "size", "backgroundColor", "label"];
/**
 * Primary UI component for user interaction
 */

var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
      primary = _ref$primary === void 0 ? false : _ref$primary,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "medium" : _ref$size,
      backgroundColor = _ref.backgroundColor,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, _excluded);

  var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    type: "button",
    className: ["storybook-button", "storybook-button--".concat(size), mode].join(" "),
    style: {
      backgroundColor: backgroundColor
    }
  }, props), label);
};

var GalleryContainer = styled__default["default"].div.withConfig({
  displayName: "ImageGallery__GalleryContainer",
  componentId: "sc-1k3q7q7-0"
})(["display:flex;flex-wrap:wrap;align-items:center;"]);
var ImageGallery = function ImageGallery(_ref) {
  var images = _ref.images,
      numberOfColumns = _ref.numberOfColumns;
  var columnsClass = "w-".concat(numberOfColumns, "/12");
  return /*#__PURE__*/React.createElement(GalleryContainer, {
    className: "flex flex-wrap items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: columnsClass
  }, images.map(function (image) {
    return image && image.src && /*#__PURE__*/React.createElement("img", {
      src: image.src,
      alt: image.alt || "Gallery Image"
    });
  })));
};

exports.Button = Button;
exports.ImageGallery = ImageGallery;
//# sourceMappingURL=main.js.map
