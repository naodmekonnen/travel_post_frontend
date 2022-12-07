import React from 'react'
import request from '../services/api.request'
import { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState'


const HomePage = () => {
    
    const [state, dispatch] = useGlobalState()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
          let options = {
            url: "posts/",
            method: "GET",
            params: {
            post_author__id: state.currentUser.user_id,
            },
          };
          let response = await request(options);
          await dispatch({
            postData: response.data,
          });
          setPosts(response.data);
        }
        getPosts();
      }, []);
    
    
      return (
        <div>
            <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <h1>Homepage</h1>
                <div></div>
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                </div>
            </div>
        </div>
            )
}

export default HomePage