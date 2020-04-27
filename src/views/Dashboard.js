import React from "react"
import Auth from "../utils/Auth";
import { useHistory } from "react-router-dom";
import { PublicPaths } from "../routes";

const Dashboard=()=>{
  let history = useHistory();

  const handleLogOut=()=>{
    Auth.removeToken();
    history.push(PublicPaths.LOGIN);
  }

  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogOut}> LOG OUT</button>
    </div>
  )
}

export default Dashboard