var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import Prototypes from 'prop-types';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import * as Icons from "./icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));

var PanelBody = function PanelBody(_ref) {
  var isPushed = _ref.isPushed,
      pushNav = _ref.pushNav,
      isMobile = _ref.isMobile,
      links = _ref.links;
  var location = useLocation(); // Close the menu when a user clicks a link on mobile

  var handleClick = isMobile ? function () {
    return pushNav(false);
  } : undefined;
  return /*#__PURE__*/React.createElement(Container, null, links.map(function (entry) {
    var Icon = Icons[entry.icon];
    var iconElement = /*#__PURE__*/React.createElement(Icon, {
      width: "24px",
      mr: "8px"
    });
    var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

    if (entry.items) {
      var itemsMatchIndex = entry.items.findIndex(function (item) {
        return item.href === location.pathname;
      });
      var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
      return /*#__PURE__*/React.createElement(Accordion, {
        key: entry.label,
        isPushed: isPushed,
        pushNav: pushNav,
        icon: iconElement,
        label: entry.label,
        status: entry.status,
        initialOpenState: initialOpenState,
        className: calloutClass,
        isActive: entry.items.some(function (item) {
          return item.href === location.pathname;
        })
      }, isPushed && entry.items.map(function (item) {
        return /*#__PURE__*/React.createElement(MenuEntry, {
          key: item.href,
          secondary: true,
          isActive: item.href === location.pathname,
          onClick: handleClick
        }, /*#__PURE__*/React.createElement(MenuLink, {
          href: item.href
        }, /*#__PURE__*/React.createElement(LinkLabel, {
          isPushed: isPushed
        }, item.label), item.status && /*#__PURE__*/React.createElement(LinkStatus, {
          color: item.status.color,
          fontSize: "14px"
        }, item.status.text)));
      }));
    }

    return /*#__PURE__*/React.createElement(MenuEntry, {
      key: entry.label,
      isActive: entry.href === location.pathname,
      className: calloutClass
    }, /*#__PURE__*/React.createElement(MenuLink, {
      href: entry.href,
      onClick: handleClick
    }, iconElement, /*#__PURE__*/React.createElement(LinkLabel, {
      isPushed: isPushed
    }, entry.label), entry.status && /*#__PURE__*/React.createElement(LinkStatus, {
      color: entry.status.color,
      fontSize: "14px"
    }, entry.status.text)));
  }));
};

PanelBody.propTypes = {
  links: Prototypes.array,
  isPushed: Prototypes.bool,
  pushNav: Prototypes.func,
  isMobile: Prototypes.bool
};
export default PanelBody;