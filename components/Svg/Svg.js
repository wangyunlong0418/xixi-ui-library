var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css, keyframes } from "styled-components";
import { space } from "styled-system";
import getThemeValue from '../../utils/getThemeValue';
var rotate = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-self: center;\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return getThemeValue("colors.".concat(color), color)(theme);
}, function (_ref2) {
  var spin = _ref2.spin;
  return spin && spinStyle;
}, space);
Svg.defaultProps = {
  color: "text",
  width: "20px",
  xmlns: "http://www.w3.org/2000/svg",
  spin: false
};
export default Svg;