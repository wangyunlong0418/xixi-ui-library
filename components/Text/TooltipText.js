var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import Text from "./Text";
var TooltipText = styled(Text)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_ref) {
  var theme = _ref.theme;
  return "underline dotted ".concat(theme.colors.textSubtle);
});
export default TooltipText;