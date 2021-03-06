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

var _GridUtils = require('./GridUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridButton = function GridButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: style,
      onClick: function onClick(e) {
        return onChange((0, _GridUtils.appendGrid)(state));
      },
      className: (0, _classnames2.default)('slate-grid-plugin--button', { active: (0, _GridUtils.hasGrid)(state) }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'th' })
  );
};

exports.default = GridButton;