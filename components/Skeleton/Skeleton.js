var _excluded = ["variant", "animation"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled, { keyframes } from "styled-components";
import { space, layout } from "styled-system";
import { VARIANT, ANIMATION } from './constant';
var waves = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.backgroundDisabled;
}, function (_ref2) {
  var variant = _ref2.variant,
      theme = _ref2.theme;
  return variant === VARIANT.CIRCLE ? theme.radii.circle : theme.radii.small;
}, layout, space);
var Pulse = styled(Root)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);

var Skeleton = function Skeleton(_ref3) {
  var _ref3$variant = _ref3.variant,
      variant = _ref3$variant === void 0 ? VARIANT.RECT : _ref3$variant,
      _ref3$animation = _ref3.animation,
      animation = _ref3$animation === void 0 ? ANIMATION.PULSE : _ref3$animation,
      props = _objectWithoutProperties(_ref3, _excluded);

  if (animation === ANIMATION.WAVES) {
    return /*#__PURE__*/React.createElement(Waves, _extends({
      variant: variant
    }, props));
  }

  return /*#__PURE__*/React.createElement(Pulse, _extends({
    variant: variant
  }, props));
};

export default Skeleton;