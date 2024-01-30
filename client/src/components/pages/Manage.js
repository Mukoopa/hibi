import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";

import "../../utilities.css";
import "./Manage.css"
// do I need to import the user schema


const Manage = (props, userId) => {
  return (
        <button
          onClick={() => {
            props.personalQueue.splice(1,1)
          }}
        >
        </button>
  )}
export default Manage;
