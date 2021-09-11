var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import { space, typography, layout } from "styled-system";
import getThemeValue from '../../utils/getThemeValue';

var getColor = function getColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return getThemeValue("colors.".concat(color), color)(theme);
};

var getFontSize = function getFontSize(_ref2) {
  var fontSize = _ref2.fontSize,
      small = _ref2.small;
  return small ? "14px" : fontSize || "16px";
};

var Text = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_ref3) {
  var bold = _ref3.bold;
  return bold ? 600 : 400;
}, function (_ref4) {
  var textTransform = _ref4.textTransform;
  return textTransform && "text-transform: ".concat(textTransform, ";");
}, function (_ref5) {
  var ellipsis = _ref5.ellipsis;
  return ellipsis && "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout);
Text.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false
};
export default Text;