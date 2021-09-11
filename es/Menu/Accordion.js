var _templateObject, _templateObject2;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { useState } from "react";
import Prototypes from 'prop-types';
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./constant";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../Svg";
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_ref) {
  var isOpen = _ref.isOpen,
      maxHeight = _ref.maxHeight;
  return isOpen ? "".concat(maxHeight, "px") : 0;
}, function (_ref2) {
  var isOpen = _ref2.isOpen,
      isPushed = _ref2.isPushed;
  return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
});

var Accordion = function Accordion(_ref3) {
  var label = _ref3.label,
      status = _ref3.status,
      icon = _ref3.icon,
      isPushed = _ref3.isPushed,
      pushNav = _ref3.pushNav,
      _ref3$initialOpenStat = _ref3.initialOpenState,
      initialOpenState = _ref3$initialOpenStat === void 0 ? false : _ref3$initialOpenStat,
      children = _ref3.children,
      className = _ref3.className,
      isActive = _ref3.isActive;

  var _useState = useState(initialOpenState),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var handleClick = function handleClick() {
    if (isPushed) {
      setIsOpen(function (prevState) {
        return !prevState;
      });
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(MenuEntry, {
    onClick: handleClick,
    className: className,
    isActive: isActive,
    role: "button"
  }, icon, /*#__PURE__*/React.createElement(LinkLabel, {
    isPushed: isPushed
  }, label), status && /*#__PURE__*/React.createElement(LinkStatusComponent, {
    color: status.color,
    fontSize: "14px"
  }, status.text), isOpen ? /*#__PURE__*/React.createElement(ArrowDropUpIcon, null) : /*#__PURE__*/React.createElement(ArrowDropDownIcon, null)), /*#__PURE__*/React.createElement(AccordionContent, {
    isOpen: isOpen,
    isPushed: isPushed,
    maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT
  }, children));
};

Accordion.propTypes = {
  label: Prototypes.string,
  status: Prototypes.object,
  icon: Prototypes.node,
  isPushed: Prototypes.bool,
  pushNav: Prototypes.func,
  initialOpenState: Prototypes.bool,
  children: Prototypes.node,
  className: Prototypes.string,
  isActive: Prototypes.bool
};
export default Accordion;