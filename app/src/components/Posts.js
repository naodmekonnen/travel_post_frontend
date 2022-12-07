import React from "react";
import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import { useState, useEffect } from "react";


const Posts = () => {
    const [state, dispatch] = useGlobalState();
    const [postData, setPostData] = useState([]);
    const [postContent, setPostContent] = useState('');



    useEffect(() => {
        async function getPosts() {
            let options = {
                url: "posts/",
                method: "GET",
                params: {
                    author__id: state.currentUser.user_id,
                },
            };
            let resp = await request(options);
            setPostData(resp.data);
        }
        getPosts();
    }, []);


    async function sendPosts() {
        let options = {
            url: "posts/",
            method: "POST",
            data: {
                body: postContent,
                post_author: state.currentUser.user_id,
            },
        };
        let resp = await request(options);
        setPostData([
            ...postData,
            resp.data
        ])
    }


    return (
        <div>
            <form className='grid justify-items-center'>
                <div className="w-2/4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="post" className="sr-only">Your comment</label>
                        <textarea
                            onChange={(e) => setPostContent(e.target.value)}
                            id="post" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your post..." required></textarea>
                    </div>
                    <div className="align-items:center px-3 py-2 border-t dark:border-gray-600">
                        <button className="inline-flex -center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            onClick={sendPosts}
                            type="submit" >
                            Publish Post
                        </button>
                    </div>
                </div>
            </form>

            {postData.map((post) => (
                <div key={post.id}>
                    {post.body}
                    {post.post_author.post_author}
                </div>
            ))}

        </div>
    )
}

export default Posts;











