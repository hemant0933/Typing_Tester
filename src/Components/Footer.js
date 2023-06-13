import React from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
 
  const { setTheme,theme } = useTheme();

  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme",JSON.stringify(e.value));
  };

  return (
    <div className="footer">
      <div className="left_footer">Links</div>
      <div className="themeButton">
        <Select
         styles={{
          control:styles => ({
            ...styles, backgroundColor: theme.background

          }),
          menu: styles => ({
            ...styles,backgroundColor: theme.background
          }),
          option: (styles,{isFocused}) => {
            return {
              ...styles,
              backgroundColor: (isFocused) ? theme.background : theme.textColor,
              color:theme.typeBoxText,
              cursor:'pointer',
            }
          }
         }}
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{label:theme.label,value:theme.values}}
        />
      </div>
    </div>
  );
};

export default Footer;
