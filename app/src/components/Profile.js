import React, { useState, useEffect } from "react"
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
// import axios from "axios";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [userData, setUserData] = useState([]);

  const authUser = state.currentUser.user_id;


  async function getUserData() {
    let options = {
      url: `users/${authUser}/`,
      method: "GET",
    };

    let resp = await request(options);
    setUserData(resp.data);
  }

  useEffect(() => {
    getUserData();
}, []);


  return (

  <div>
      <h4>username: {userData.username}</h4>
      <h4>first name: {userData.first_name}</h4>
      <h4>last name: {userData.last_name}</h4>
      <h4>email: {userData.email}</h4>
      
      {userData.followers?.map((f) => (
      <div key={f.id}>
      <h4>{f.followers}</h4>
      </div>
      ))}

      {userData.following?.map((f) => (
      <div key={f.id}>
      <h4>{f.following}</h4>
      </div>
      ))}
  </div>
  )
}

export default Profile
