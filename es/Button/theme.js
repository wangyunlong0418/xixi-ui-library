var _scaleVariants, _styleVariants;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { scales, variants } from "./constant";
export var scaleVariants = (_scaleVariants = {}, _defineProperty(_scaleVariants, scales.MD, {
  height: "48px",
  padding: "0 24px"
}), _defineProperty(_scaleVariants, scales.SM, {
  height: "32px",
  padding: "0 16px"
}), _defineProperty(_scaleVariants, scales.XS, {
  height: "20px",
  fontSize: "12px",
  padding: "0 8px"
}), _scaleVariants);
export var styleVariants = (_styleVariants = {}, _defineProperty(_styleVariants, variants.PRIMARY, {
  backgroundColor: "primary",
  color: "white"
}), _defineProperty(_styleVariants, variants.SECONDARY, {
  backgroundColor: "transparent",
  border: "2px solid",
  borderColor: "primary",
  boxShadow: "none",
  color: "primary",
  ":disabled": {
    backgroundColor: "transparent"
  }
}), _defineProperty(_styleVariants, variants.TERTIARY, {
  backgroundColor: "tertiary",
  boxShadow: "none",
  color: "primary"
}), _defineProperty(_styleVariants, variants.SUBTLE, {
  backgroundColor: "textSubtle",
  color: "backgroundAlt"
}), _defineProperty(_styleVariants, variants.DANGER, {
  backgroundColor: "failure",
  color: "white"
}), _defineProperty(_styleVariants, variants.SUCCESS, {
  backgroundColor: "success",
  color: "white"
}), _defineProperty(_styleVariants, variants.TEXT, {
  backgroundColor: "transparent",
  color: "primary",
  boxShadow: "none"
}), _defineProperty(_styleVariants, variants.LIGHT, {
  backgroundColor: "input",
  color: "textSubtle",
  boxShadow: "none"
}), _styleVariants);