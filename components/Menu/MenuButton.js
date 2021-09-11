var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import Button from "../Button/Button";
var MenuButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.text;
});
MenuButton.defaultProps = {
  variant: "text",
  size: "sm"
};
export default MenuButton;