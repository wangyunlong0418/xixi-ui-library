import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";
export var ExpandableButton = function ExpandableButton(_ref) {
  var onClick = _ref.onClick,
      expanded = _ref.expanded,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Hide or show expandable content",
    onClick: onClick
  }, children, expanded ? /*#__PURE__*/React.createElement(ChevronUpIcon, {
    color: "invertedContrast"
  }) : /*#__PURE__*/React.createElement(ChevronDownIcon, {
    color: "invertedContrast"
  }));
};
ExpandableButton.defaultProps = {
  expanded: false
};
export var ExpandableLabel = function ExpandableLabel(_ref2) {
  var onClick = _ref2.onClick,
      expanded = _ref2.expanded,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    "aria-label": "Hide or show expandable content",
    onClick: onClick,
    endIcon: expanded ? /*#__PURE__*/React.createElement(ChevronUpIcon, {
      color: "primary"
    }) : /*#__PURE__*/React.createElement(ChevronDownIcon, {
      color: "primary"
    })
  }, children);
};
ExpandableLabel.defaultProps = {
  expanded: false
};