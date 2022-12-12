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
  <div className="flex items-center min-h-screen w-full justify-center">
    <div className="max-w-xs">
      <div className="bg-white shadow-xl rounded-lg py-3">
        <h4 className='text-center font-semibold'>Profile Details</h4>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">First Name</td>
              <td className="px-2 py-2">{userData.first_name}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Last Name</td>
              <td className="px-2 py-2">{userData.last_name}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">username</td>
              <td className="px-2 py-2">{userData.username}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">{userData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>

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

export default Profile;

