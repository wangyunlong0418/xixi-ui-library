import styled from "styled-components";
import { flexbox } from "styled-system";
import Container from "./Container";

const Flex = styled(Container)`
  display: flex;
  ${flexbox}
`;

export default Flex;
