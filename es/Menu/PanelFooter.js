var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled from "styled-components";
import { CogIcon } from "../Svg";
import IconButton from "../Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "./constant";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher"; // import SocialLinks from "./SocialLinks";

import LangSelector from "./LangSelector";
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.nav.background;
});
var SettingsEntry = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);

var PanelFooter = function PanelFooter(_ref2) {
  var isPushed = _ref2.isPushed,
      pushNav = _ref2.pushNav,
      toggleTheme = _ref2.toggleTheme,
      isDark = _ref2.isDark,
      cakePriceUsd = _ref2.cakePriceUsd,
      currentLang = _ref2.currentLang,
      langs = _ref2.langs,
      setLang = _ref2.setLang;

  if (!isPushed) {
    return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(IconButton, {
      variant: "text",
      onClick: function onClick() {
        return pushNav(true);
      }
    }, /*#__PURE__*/React.createElement(CogIcon, null)));
  }

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SocialEntry, null, /*#__PURE__*/React.createElement(CakePrice, {
    cakePriceUsd: cakePriceUsd
  })), /*#__PURE__*/React.createElement(SettingsEntry, null, /*#__PURE__*/React.createElement(ThemeSwitcher, {
    isDark: isDark,
    toggleTheme: toggleTheme
  }), /*#__PURE__*/React.createElement(LangSelector, {
    currentLang: currentLang,
    langs: langs,
    setLang: setLang
  })));
};

export default PanelFooter;