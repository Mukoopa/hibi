import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { post, get } from "../../utilities"; // import post so can use post function to database

import "../../utilities.css";
import "./Home.css";


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "765781753125-8ofe76jbvub99vpfrhm80trrvuns70p3.apps.googleusercontent.com";

const Home = ({ userId, handleLogin, handleLogout }) => {

  const [greeting_state_Homejsln11, setGreeting_state_Homejsln11] = useState(1)

  const update_greeting_state_send_to_database = () => {
    if (greeting_state_Homejsln11 == 1) {
      setGreeting_state_Homejsln11(2);
      post("/api/greeting_State_database_apijs21", {state: 2});
    }
    else if (greeting_state_Homejsln11 == 2) {
      setGreeting_state_Homejsln11(1);
      post("/api/greeting_State_database_apijs21", {state: 1});
    }
  
  }

  useEffect(() => {
    get("/api/greeting_State_database_apijs21").then((res) => setGreeting_state_Homejsln11(res.state));
  }, [])
   //update to my name variable 
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {userId ? (
        <button
          onClick={() => {
            googleLogout();
            handleLogout();
          }}
        >
          Logout
        </button>
      ) : (
        <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
      )}
      <h1>Good luck on your project :)</h1>
      <h1>{userId}</h1>
      <button onClick={update_greeting_state_send_to_database}>click to change!</button>
      <div>{greeting_state_Homejsln11 === 1 ? "Hi" : "Bye"}</div>
    </GoogleOAuthProvider>
  );
};

export default Home;
