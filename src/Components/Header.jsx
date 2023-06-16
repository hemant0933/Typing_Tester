import React from "react";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Account from "./Account";
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();

  const handleMoveToHome = () => {
    return navigate('/');
  }

  return (
    <div className="header">
      <div className="logo" style={{cursor:'pointer'}} onClick={handleMoveToHome}>
        <div>
          <KeyboardIcon style={{ fontSize: "2.8rem" }} />
        </div>
        <div style={{ fontSize: "1.5rem",fontWeight:'bolder' ,marginTop: '10px'}}>Typing Master</div>
      </div>
      <div className="user_icon">
        {/* user icone here */}
        <Account/>
      </div>
    </div>
  );
};

export default Header;
