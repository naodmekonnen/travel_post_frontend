import { useGlobalState } from "../context/GlobalState";
import request from "../services/api.request";
import React, { useState, useEffect } from "react";
import balloons from '../assets/balloons.jpg'


const Posts = () => {
    const [state, dispatch] = useGlobalState();
    const [postData, setPostData] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [commentData, setCommentData] = useState([])
    const [comments, setComments] = useState('')

    // const [like, setLike] = useState(0)
    // const [dislike, setDislike] = useState(0) 

    // const [likeactive, setLikeActive] = useState(false)
    // const [dislikeActive, setDislikeActive] = useState(false) 

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


    async function sendPosts(e) {
        e.preventDefault();
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

    // function Like(){
    //     if(likeactive){
    //         setLikeActive(false)
    //         setLike(like - 1)
    //     }else{
    //         setLikeActive(true)
    //         setLike(like + 1)
    //         if(dislikeActive){
    //             setDislikeActive(false)
    //             setLike(Like + 1)
    //             setDislike(dislike - 1)
    //             }
    //         }
    //     }
        
    //     function Dislike(){
    //     if(likeactive){
    //         setDislikeActive(false)
    //         setDislike(dislike - 1)
    //     }else{
    //         setDislikeActive(true)
    //         setDislike(dislike + 1)
    //         if(likeactive){
    //             setLikeActive(false)
    //             setDislike(dislike + 1)
    //             setLike(dislike - 1)
    //         }
    //     }
    //     }






    return (
        <div className="h-screen bg-gradient-to-b from-blue-400 to-blue-1800">
            <div>
<<<<<<< HEAD
                <div className="w-full flex flex-row flex-wrap">
                    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <div className="w-full h-screen flex flex-row flex-wrap justify-center ">
                        <div className="w-full md:w-3/4 lg:w-2/4 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
                            <div className="bg-white w-full shadow rounded-lg p-5">
                                <textarea className="bg-gray-200 w-full rounded-lg shadow border p-2" rows="3" placeholder="Share your thoughts"
                                    onChange={(e) => setPostContent(e.target.value)}>
                                </textarea>
                                <div className="w-full flex flex-row flex-wrap mt-3">
                                    <div className="w-full flex flex-col items-center">
                                        <button type="button" className="content-center bg-gradient-to-b from-blue-400 to-blue-800 hover:bg-blue-1800 text-white p-2 rounded-lg"
                                            onClick={sendPosts}
                                        >
                                        Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {postData.map((post) => (
                                <div key={post.id}>
                                    <div className="mt-3 flex flex-col">
                                        <div className="bg-white mt-3 rounded-lg">
                                            <div className="w-full text-left text-gray-700">
                                                <p className="dark:text-gray-300 md:text-sm">{post.username}</p>
                                            </div>
                                            <div className="bg-white border shadow p-5 dark:text-gray-300 md:text-sm font-bold text-center">
                                                <p>{post.body}</p>
                                            </div>
                                            <div className="w-full flex flex-row flex-wrap mt-4">
                                                    <form className='w-full bg-white'>
                                                        <label htmlFor="comment" className="sr-only">Your comment</label>
                                                        <div className="w-full flex items-center px-3 py-2 rounded-lg">
                                                            <textarea id="comment" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your comment..."
                                                                onChange={(e) => setComments(e.target.value)}
                                                            >
                                                            </textarea>
                                                            <button type="submit" className="inline-flex justify-center p-2 rounded-full"
                                                                onClick={() => postComment(post.id)}
                                                            >
                                                                <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                                                <span className="sr-only"></span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            {post.comments.map((c) => (
                                        <div key={c.id}>
                                            <div className="bg-white w-full shadow rounded-lg p-5">
                                                
                                                <div className="border-4 border-gray rounded-b-lg shadow p-5 text-xl text-gray-200 content-center font-bold flex flex-row flex-wrap">
                                                <div className="w-full">
                                                    <p className=" dark:text-gray-500 text-right text-sm font-bold">{c.comment} - {c.commented_by}</p>
=======
                <form className='grid justify-items-center'>
                    <div className="w-2/4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="post" className="sr-only">Your Post</label>
                            <textarea
                                onChange={(e) => setPostContent(e.target.value)}
                                id="post"
                                rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your post..." required></textarea>
                            {/* <div>
                                <div className="App">
                                    <h6>upload photo</h6>
                                    <label>
                                        photo
                                        <input type="text" 
                                        // value={} 
                                        onChange={() => setTitle(e.target.value)} />
                                    </label>
                                    <br />
                                    <label>
                                        Cover
                                        <input type="file" onChange={() => (e.target.files[0])} />
                                    </label>
                                    <br />
                                    <button>upload</button>
                                </div>                                   
                                </div> */}
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
>>>>>>> follows
                                                </div>
                                            </div>
                                            </div>
                                              
                                        </div>
                                        ))}
                                        </div>
                                        <div className="bg-white mt-3">
                                            <img className="border rounded-t-lg shadow-lg h-full w-full" src={balloons}></img>
                                        </div>
                                    </div>
                                </div>
<<<<<<< HEAD
                            ))}
=======
                              {post.comments.map((c) => (
                                    <div key={c.id} className="row">
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
>>>>>>> follows
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Posts;








                