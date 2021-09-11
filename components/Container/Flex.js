var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from "styled-components";
import { flexbox } from "styled-system";
import Container from "./Container";
var Flex = styled(Container)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"])), flexbox);
export default Flex;