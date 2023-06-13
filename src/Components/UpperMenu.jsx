import React from "react";
import { useTestMode } from "../Context/TestModeContext";

const UpperMenu = ({ countDown }) => {

    const {setTestTime} = useTestMode();

    const UpdateTime = (e) => {
        setTestTime(Number(e.target.id));
    }
  return (
    <div className="upper_menu">
      <div className="counter">
        {countDown}
        </div>
        <div className="modes">
          <div className="time-mode" onClick={UpdateTime} id={15}>
            15s
          </div>
          <div className="time-mode" onClick={UpdateTime} id={30}>
            30s
          </div>
          <div className="time-mode" onClick={UpdateTime} id={60}>
            60s
          </div>
        </div>
    </div>
  );
};

export default UpperMenu;
