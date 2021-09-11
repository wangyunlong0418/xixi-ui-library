var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import throttle from "lodash/throttle";
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from './constant';
import Flex from '../Container/Flex';
import Overlay from '../Overlay';
import Panel from './Panel';
import { useMatchBreakpoints } from '../../hooks';
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_ref) {
  var showMenu = _ref.showMenu;
  return showMenu ? 0 : "-".concat(MENU_HEIGHT, "px");
}, MENU_HEIGHT, function (_ref2) {
  var theme = _ref2.theme;
  return theme.nav.background;
});
var BodyWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_ref3) {
  var showMenu = _ref3.showMenu;
  return showMenu ? "".concat(MENU_HEIGHT, "px") : 0;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.mediaQueries.nav;
}, function (_ref5) {
  var isPushed = _ref5.isPushed;
  return "".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px");
}, function (_ref6) {
  var isPushed = _ref6.isPushed;
  return "calc(100% - ".concat(isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED, "px)");
});
var MobileOnlyOverlay = styled(Overlay)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.mediaQueries.nav;
});

var Menu = function Menu(_ref8) {
  var userMenu = _ref8.userMenu,
      globalMenu = _ref8.globalMenu,
      isDark = _ref8.isDark,
      toggleTheme = _ref8.toggleTheme,
      langs = _ref8.langs,
      setLang = _ref8.setLang,
      currentLang = _ref8.currentLang,
      cakePriceUsd = _ref8.cakePriceUsd,
      links = _ref8.links,
      children = _ref8.children;

  var _useMatchBreakpoints = useMatchBreakpoints(),
      isMobile = _useMatchBreakpoints.isMobile,
      isTablet = _useMatchBreakpoints.isTablet;

  var isSmallerScreen = isMobile || isTablet;

  var _useState = useState(!isSmallerScreen),
      _useState2 = _slicedToArray(_useState, 2),
      isPushed = _useState2[0],
      setIsPushed = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showMenu = _useState4[0],
      setShowMenu = _useState4[1];

  var refPrevOffset = useRef(window.pageYOffset);
  useEffect(function () {
    var handleScroll = function handleScroll() {
      var currentOffset = window.pageYOffset;
      var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      var isTopOfPage = currentOffset === 0; // Always show the menu when user reach the top

      if (isTopOfPage) {
        setShowMenu(true);
      } // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }

      refPrevOffset.current = currentOffset;
    };

    var throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledHandleScroll);
    return function () {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(StyledNav, null, /*#__PURE__*/React.createElement(Flex, null, globalMenu, " ", userMenu)), /*#__PURE__*/React.createElement(BodyWrapper, null, /*#__PURE__*/React.createElement(Panel, {
    isPushed: isPushed,
    isMobile: isSmallerScreen,
    showMenu: showMenu,
    isDark: isDark,
    toggleTheme: toggleTheme,
    langs: langs,
    setLang: setLang,
    currentLang: currentLang,
    cakePriceUsd: cakePriceUsd,
    pushNav: setIsPushed,
    links: links
  }), /*#__PURE__*/React.createElement(Inner, {
    isPushed: isPushed,
    showMenu: showMenu
  }, children), /*#__PURE__*/React.createElement(MobileOnlyOverlay, {
    show: isPushed,
    onClick: function onClick() {
      return setIsPushed(false);
    },
    role: "presentation"
  })));
};

export default Menu;