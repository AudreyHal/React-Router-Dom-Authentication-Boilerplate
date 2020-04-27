import React from "react";
import Auth from "../utils/Auth";
import { useHistory } from "react-router-dom";
import { PrivatePaths } from "../routes";

const Login=()=>{
  let history = useHistory();

  const handleLogIn=()=>{
    Auth.setToken("exampleToken");
    history.push(PrivatePaths.Dashboard);
  }

  return(
    <div>
      <h1>Log In Page</h1>
      <button onClick={handleLogIn}> LOG IN</button>
    </div>
  )
}

export default Login