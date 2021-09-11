var _excluded = ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { cloneElement, isValidElement } from "react";
import getExternalLinkProps from "../utils/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { variants, scales } from './constant';

var Button = function Button(props) {
  // eslint-disable-next-line
  var startIcon = props.startIcon,
      endIcon = props.endIcon,
      external = props.external,
      className = props.className,
      isLoading = props.isLoading,
      disabled = props.disabled,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var internalProps = external ? getExternalLinkProps() : {};
  var isDisabled = isLoading || disabled;
  var classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("pancake-button--disabled");
  }

  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    $isLoading: isLoading,
    className: classNames.join(" "),
    disabled: isDisabled
  }, internalProps, rest), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/isValidElement(startIcon) && /*#__PURE__*/cloneElement(startIcon, {
    mr: "0.5rem"
  }), children, /*#__PURE__*/isValidElement(endIcon) && /*#__PURE__*/cloneElement(endIcon, {
    ml: "0.5rem"
  })));
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false
};
export default Button;