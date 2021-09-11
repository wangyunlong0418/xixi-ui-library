var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
var PriceLink = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));

var CakePrice = function CakePrice(_ref) {
  var cakePriceUsd = _ref.cakePriceUsd;
  return cakePriceUsd ? /*#__PURE__*/React.createElement(PriceLink, {
    href: "https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
    target: "_blank"
  }, /*#__PURE__*/React.createElement(PancakeRoundIcon, {
    width: "24px",
    mr: "8px"
  }), /*#__PURE__*/React.createElement(Text, {
    color: "textSubtle",
    bold: true
  }, "$".concat(cakePriceUsd.toFixed(3)))) : /*#__PURE__*/React.createElement(Skeleton, {
    width: 80,
    height: 24
  });
};

export default /*#__PURE__*/React.memo(CakePrice);