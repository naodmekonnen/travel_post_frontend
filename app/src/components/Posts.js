import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";


const Posts = () => {
    const [state, dispatch] = useGlobalState();
    const [postData, setPostData] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [commentData, setCommentData] = useState([])
    const [comments, setComments] = useState('')

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
        console.log(postData)
    }

    useEffect(() => {
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

    useEffect(() => {
        async function getComments() {
            let options = {
                url: "comments/",
                method: "GET",
                params: {
                   comment_author: state.currentUser.user_id,
                },
            };
            let resp = await request(options);
            setCommentData(resp.data);
        }
        getComments();
    }, []);



    async function postComment(postId) {
        let options = {
            url: 'comments/',
            method: 'POST',
            data: {
                comment: comments,
                comment_author: state.currentUser.user_id,
                post: postId,
            }
        }
        console.log(options)
        let resp = await request(options);
        setCommentData([
            ...commentData,
            resp.data
        ])
        getPosts()
    }




    return (
        <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-1800">
            <div>
                <form className='grid justify-items-center'>
                    <div className="w-2/4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="post" className="sr-only">Your Post</label>
                            <textarea
                                onChange={(e) => setPostContent(e.target.value)}
                                id="post"
                                rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your post..." required></textarea>
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
            </div>
            <div>
                {postData.map((post) => (
                    <div key={post.id}>
                        <div className="my-px-4 bg-gray-100 flex items-center justify-center">
                            <div className="px-10">
                                <div className="bg-white max-w-2xl rounded-2xl px-14 py-10 shadow-lg hover:shadow-2xl transition duration-500">
                                    <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">LOGO</div>
                                    <div className="mt-4">
                                        <p className="mt-4 text-md text-gray-600">
                                            {post.body}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <div className="mt-4 flex items-center space-x-4 py-6">
                                                <div className="text-sm font-semibold">
                                                    {post.post_author.username}
                                                    <span className="font-normal"></span>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div>
                                        </div>
                                    </div>
                                </div>
                                { post.comments.map((c) => (
                                    <div key={c.id}className="row">
                                        {c.comment} - {c.commented_by}
                                    </div>
                                ))}
                                <div>
                                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                        <label htmlFor="post" className="sr-only">Your comment</label>
                                        <textarea
                                            onChange={(e) => setComments(e.target.value)}
                                            id="post"
                                            rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your post..." required></textarea>
                                    </div>
                                    <div className="align-items:center px-3 py-2 border-t dark:border-gray-600">
                                    <button className="inline-flex -center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                        onClick={() => postComment(post.id)}
                                        type="submit" >
                                        Comment
                                    </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts;



