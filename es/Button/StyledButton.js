var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";

var getDisabledStyles = function getDisabledStyles(_ref) {
  var $isLoading = _ref.$isLoading,
      theme = _ref.theme;

  if ($isLoading === true) {
    return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
  }

  return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: ".concat(theme.colors.backgroundDisabled, ";\n      border-color: ").concat(theme.colors.backgroundDisabled, ";\n      box-shadow: none;\n      color: ").concat(theme.colors.textDisabled, ";\n      cursor: not-allowed;\n    }\n  ");
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */


var getOpacity = function getOpacity(_ref2) {
  var _ref2$$isLoading = _ref2.$isLoading,
      $isLoading = _ref2$$isLoading === void 0 ? false : _ref2$$isLoading;
  return $isLoading ? ".5" : "1";
};

var StyledButton = styled.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant({
  prop: "scale",
  variants: scaleVariants
}), variant({
  variants: styleVariants
}), layout, space);
export default StyledButton;