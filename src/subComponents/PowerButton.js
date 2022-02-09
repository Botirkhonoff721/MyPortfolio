// home button
import { Power } from "./style";
import React from "react";
import {NavLink} from 'react-router-dom'
import { PowerBtn } from "../components/AllSvgs/AllSvg";

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </NavLink>
    </Power>
  );
};

export default PowerButton;
