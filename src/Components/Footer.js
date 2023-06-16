import React from "react";
import Select from "react-select";
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
 
  const { setTheme,theme } = useTheme();

  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme",JSON.stringify(e.value));
  };

  const handleClickToLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/hemant-kumar-0a9b69bb/";
  }
  const handleClickToGithub = () => {
    window.location.href = "https://github.com/hemant0933";
  }

  return (
    <div className="footer">
      <div className="left_footer">
        <span><LinkedInIcon style={{fontSize:'2rem'}} onClick={handleClickToLinkedin}/></span>
        <span><GitHubIcon style={{fontSize:'2rem'}} onClick={handleClickToGithub}/></span>
      </div>

      <div className="themeButton">
        <Select
         styles={{
          control:styles => ({
            ...styles, backgroundColor: theme.background,width:150

          }),
          menu: styles => ({
            ...styles,backgroundColor: theme.background,color: theme.typeBoxText
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
