var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import Button from "./Button";
var IconButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0;\n  width: ", ";\n"])), function (_ref) {
  var scale = _ref.scale;
  return scale === "sm" ? "32px" : "48px";
});
export default IconButton;