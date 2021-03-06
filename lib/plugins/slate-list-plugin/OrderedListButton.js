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

var _ListUtils = require('./ListUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderedListButton = function OrderedListButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    'button',
    {
      style: style,
      onClick: function onClick(e) {
        return onChange((0, _ListUtils.orderedListStrategy)(state, 'ordered-list'));
      },
      className: (0, _classnames2.default)('slate-list-plugin--button', { active: (0, _ListUtils.isOrderedList)(state) }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'list-ol' })
  );
};

exports.default = OrderedListButton;