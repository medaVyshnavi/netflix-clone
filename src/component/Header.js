import React from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="w-1/2">
      <img src={LOGO} alt="netflix-logo" className="w-4/12" />
    </div>
  );
};

export default Header;
