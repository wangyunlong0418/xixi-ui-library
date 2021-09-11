import React from "react";
import Text from "../Text/Text";
import Dropdown from "../components/Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";

var LangSelector = function LangSelector(_ref) {
  var currentLang = _ref.currentLang,
      langs = _ref.langs,
      setLang = _ref.setLang;
  return /*#__PURE__*/React.createElement(Dropdown, {
    position: "top-right",
    target: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      startIcon: /*#__PURE__*/React.createElement(LanguageIcon, {
        color: "textSubtle",
        width: "24px"
      })
    }, /*#__PURE__*/React.createElement(Text, {
      color: "textSubtle"
    }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase()))
  }, langs.map(function (lang) {
    return /*#__PURE__*/React.createElement(MenuButton, {
      key: lang.locale,
      fullWidth: true,
      onClick: function onClick() {
        return setLang(lang);
      } // Safari fix
      ,
      style: {
        minHeight: "32px",
        height: "auto"
      }
    }, lang.language);
  }));
};

export default /*#__PURE__*/React.memo(LangSelector, function (prev, next) {
  return prev.currentLang === next.currentLang;
});