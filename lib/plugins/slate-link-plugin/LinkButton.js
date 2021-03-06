'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LinkUtils = require('./LinkUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkButton = function LinkButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: style,
      onMouseDown: function onMouseDown(e) {
        return onChange((0, _LinkUtils.insertLinkStrategy)(state));
      },
      className: (0, _classnames2.default)('slate-link-plugin--button', { active: (0, _LinkUtils.hasLinks)(state) }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'link' })
  );
};

exports.default = LinkButton;