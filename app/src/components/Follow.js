import React from 'react'
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";



const Follow = () => {

    const [state, dispatch] = useGlobalState();
    const [follow, setFollow] = useState();

    async function getFollowers() {
        let options = {
            url: "posts/",
            method: "GET",
            params: {
                author__id: state.currentUser.user_id,
            },
        };
        let resp = await request(options);
        setPostData(resp.data);
        console.log(postData)
    }

    useEffect(() => {
        getPosts();
    }, []);






  return (
    <div></div>
  )
}

export default Follow