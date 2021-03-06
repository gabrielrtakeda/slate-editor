'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var hasMark = exports.hasMark = function hasMark(state) {
  return state.marks.some(function (mark) {
    return mark.type === 'bold';
  });
};

var boldMarkStrategy = exports.boldMarkStrategy = function boldMarkStrategy(state) {
  return state.transform().toggleMark('bold').focus().apply();
};