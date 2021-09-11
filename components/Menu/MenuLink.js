var _excluded = ["href"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import Prototypes from 'prop-types';
import { NavLink } from "react-router-dom";

var MenuLink = function MenuLink(_ref) {
  var href = _ref.href,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
  var Tag = isHttpLink ? "a" : NavLink;
  var props = isHttpLink ? {
    href: href
  } : {
    to: href
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    role: "button"
  }, props, otherProps));
};

MenuLink.propTypes = {
  href: Prototypes.string
};
export default MenuLink;