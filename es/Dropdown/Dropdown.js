var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled from "styled-components";

var getLeft = function getLeft(_ref) {
  var position = _ref.position;

  if (position === "top-right") {
    return "100%";
  }

  return "50%";
};

var getBottom = function getBottom(_ref2) {
  var position = _ref2.position;

  if (position === "top" || position === "top-right") {
    return "100%";
  }

  return "auto";
};

var DropdownContent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_ref3) {
  var theme = _ref3.theme;
  return theme.nav.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.shadows.level1;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.zIndices.dropdown;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.radii.small;
});
var Container = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);

var Dropdown = function Dropdown(_ref7) {
  var target = _ref7.target,
      _ref7$position = _ref7.position,
      position = _ref7$position === void 0 ? "bottom" : _ref7$position,
      children = _ref7.children;
  return /*#__PURE__*/React.createElement(Container, null, target, /*#__PURE__*/React.createElement(DropdownContent, {
    position: position
  }, children));
};

Dropdown.defaultProps = {
  position: "bottom"
};
export default Dropdown;