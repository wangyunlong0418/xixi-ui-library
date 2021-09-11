import React from "react";
import Text from "../Text/Text";
import Flex from "../Container/Flex";
import Button from "../Button/Button";
import Icons from "./icons";
var MoonIcon = Icons.MoonIcon,
    SunIcon = Icons.SunIcon;

var ThemeSwitcher = function ThemeSwitcher(_ref) {
  var isDark = _ref.isDark,
      toggleTheme = _ref.toggleTheme;
  return /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: function onClick() {
      return toggleTheme(!isDark);
    }
  }, /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(SunIcon, {
    color: isDark ? "textDisabled" : "text",
    width: "24px"
  }), /*#__PURE__*/React.createElement(Text, {
    color: "textDisabled",
    mx: "4px"
  }, "/"), /*#__PURE__*/React.createElement(MoonIcon, {
    color: isDark ? "text" : "textDisabled",
    width: "24px"
  })));
};

export default /*#__PURE__*/React.memo(ThemeSwitcher, function (prev, next) {
  return prev.isDark === next.isDark;
});