import React from 'react'
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';

const Logout = () => {

let navigate = useNavigate();
  
  const [state, dispatch] = useGlobalState();
  
    AuthService
        .logout();
    dispatch({
        currentUserToken: null,
          currentUser: null
      })
    navigate("/home")
  
  
return (
    <div></div>
  )
}

export default Logout