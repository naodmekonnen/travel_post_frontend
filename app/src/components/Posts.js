import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {

    const url = 'https://8000-naodmekonne-travelpostb-m4zblizjy31.ws-us77.gitpod.io/api/posts/'
    const [posts, setPosts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(posts)
    }

    const addPosts = (posts) => {
        axios.post(url, {
            posts: posts
        })
        .then((response) => {
            console.log(response.data)
            setPosts([response.data, ...posts])
        })
        setPosts('')
    }


    // useEffect(() => {
    //     axios.get(url)
    //         .then(response => {
    //             console.log(response.post)
    //             setPost(response.post)
    //         }).catch(error => console.log(error))
    // }, [])

    // const postData = (e) => {
    //     e.preventDefault();
    // }


    // function submitPost(e){
    //     e.preventDefault();
    //     axios.post(url, {
    //         body: posts.body
    //     })
    //     .then(response => {
    //         console.log(response.posts)
    //     })
    // }

    // function handleSubmit(e) {
    //     const newpost = { ...posts }
    //     newpost[e.target.id] = e.target.value
    //     setPosts(newpost)
    //     console.log(newpost)
    // } 

    return (
        <div>
            <form  className='grid justify-items-center'>
                <div className="w-2/4 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label for="post" className="sr-only">Your comment</label>
                        <textarea id="post" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Your post..." required></textarea>
                    </div>
                    <div className="align-items:center px-3 py-2 border-t dark:border-gray-600">
                        <button className="inline-flex -center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                        onSubmit={handleSubmit} 
                        type="submit" >
                            Publish Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Posts












