var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../Text";
import { MENU_ENTRY_HEIGHT } from "./constant";
var rainbowAnimation = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_ref) {
  var isPushed = _ref.isPushed,
      theme = _ref.theme;
  return isPushed ? theme.colors.textSubtle : "transparent";
});
var MenuEntry = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_ref2) {
  var secondary = _ref2.secondary;
  return secondary ? "0 32px" : "0 16px";
}, function (_ref3) {
  var secondary = _ref3.secondary;
  return secondary ? "14px" : "16px";
}, function (_ref4) {
  var secondary = _ref4.secondary,
      theme = _ref4.theme;
  return secondary ? theme.colors.background : "transparent";
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.textSubtle;
}, function (_ref6) {
  var isActive = _ref6.isActive,
      theme = _ref6.theme;
  return isActive ? "inset 4px 0px 0px ".concat(theme.colors.primary) : "none";
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.textSubtle;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.tertiary;
}, rainbowAnimation, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false
};
var LinkStatus = styled(Text)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.radii.default;
}, function (_ref11) {
  var theme = _ref11.theme,
      color = _ref11.color;
  return theme.colors[color];
}, function (_ref12) {
  var theme = _ref12.theme,
      color = _ref12.color;
  return theme.colors[color];
});
var LinkLabelMemo = /*#__PURE__*/React.memo(LinkLabel, function (prev, next) {
  return prev.isPushed === next.isPushed;
});
export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };