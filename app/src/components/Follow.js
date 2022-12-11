import React from 'react'
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";



// const Follow = () => {

//     const [state, dispatch] = useGlobalState();
//     const [followers, setFollowers] = useState();

//     async function getFollowers() {
//         let options = {
//             url: "posts/",
//             method: "GET",
//             params: {
//                 author__id: state.currentUser.user_id,
//             },
//         };
//         let resp = await request(options);
//         setFollowers(resp.data);
//         console.log(followers)
//     }

//     useEffect(() => {
//         getFollowers();
//     }, []);


// return (
//     <div></div>
//   )
// }

// export default Follow