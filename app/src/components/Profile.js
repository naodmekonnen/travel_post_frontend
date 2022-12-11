import React, { useState, useEffect } from "react"
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
// import axios from "axios";

const Profile = () => {
  const [state, dispatch] = useGlobalState();
  const [userData, setUserData] = useState([]);
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [followUser, setfollowUser] = useState();



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



  async function getFollowers() {
    let options = {
      url: "followers/",
      method: "GET",
      params: {
        author__id: state.currentUser.user_id,
      },
    };
    let resp = await request(options);
    setFollowers(resp.data);
  }

  useEffect(() => {
    getFollowers();
  }, []);

  async function getFollowing() {
    let options = {
      url: "followers/",
      method: "GET",
      params: {
        author__id: state.currentUser.user_id,
      },
    };
    let resp = await request(options);
    setFollowing(resp.data);
  }

  useEffect(() => {
    getFollowing();
  }, []);


//   async function postFollower(postId) {
//     let options = {
//         url: 'followers/',
//         method: 'POST',
//         data: {
//             follower: state.currentUser.user_id,
//         }
//     }
//     console.log(options)
//     let resp = await request(options);
//     setfollowUser([
//         ...followUser,
//         resp.data
//     ])
//     getFollowing();
// }





  return (

    <div>
      <h4>username: {userData.username}</h4>
      <h4>first name: {userData.first_name}</h4>
      <h4>last name: {userData.last_name}</h4>
      <h4>email: {userData.email}</h4>
      <div>
        <h4>followers: {followers?.username}</h4>
        <h4>following: {following?.username}</h4>
      </div>
    </div>
  )
}

export default Profile
