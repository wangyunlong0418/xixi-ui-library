import React, { useState } from "react";
import Prototypes from 'prop-types'
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./constant";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../Svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const Accordion = ({
  label,
  status,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className} isActive={isActive} role="button">
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {status && (
          <LinkStatusComponent color={status.color} fontSize="14px">
            {status.text}
          </LinkStatusComponent>
        )}
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
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
}

export default Accordion;
