import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";

const LangSelector = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
