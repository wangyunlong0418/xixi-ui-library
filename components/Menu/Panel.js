var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./constant";
var StyledPanel = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100%;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_ref) {
  var showMenu = _ref.showMenu;
  return showMenu ? "80px" : 0;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.nav.background;
}, function (_ref3) {
  var isPushed = _ref3.isPushed;
  return isPushed ? "".concat(SIDEBAR_WIDTH_FULL, "px") : 0;
}, function (_ref4) {
  var isPushed = _ref4.isPushed;
  return isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
}, function (_ref5) {
  var isPushed = _ref5.isPushed;
  return isPushed ? "initial" : "hidden";
}, function (_ref6) {
  var isPushed = _ref6.isPushed;
  return !isPushed && "white-space: nowrap;";
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.mediaQueries.nav;
}, function (_ref8) {
  var isPushed = _ref8.isPushed;
  return "".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px");
});

var Panel = function Panel(props) {
  var isPushed = props.isPushed,
      showMenu = props.showMenu;
  return /*#__PURE__*/React.createElement(StyledPanel, {
    isPushed: isPushed,
    showMenu: showMenu
  }, /*#__PURE__*/React.createElement(PanelBody, props), /*#__PURE__*/React.createElement(PanelFooter, props));
};

export default Panel;