import React from 'react'
import { useState } from 'react'

const Like = () => {

const [like, setLike] = useState(0)
const [dislike, setDislike] = useState(0) 

const [likeactive, setLikeActive] = useState(false)
const [dislikeActive, setDislikeActive] = useState(false) 

function Like(){
if(likeactive){
    setLikeActive(false)
    setLike(like - 1)
}else{
    setLikeActive(true)
    setLike(like + 1)
    if(dislikeActive){
        setDislikeActive(false)
        setLike(Like + 1)
        setDislike(dislike - 1)
        }
    }
}

function Dislike(){
if(likeactive){
    setDislikeActive(false)
    setDislike(dislike - 1)
}else{
    setDislikeActive(true)
    setDislike(dislike + 1)
    if(likeactive){
        setLikeActive(false)
        setDislike(dislike + 1)
        setLike(dislike - 1)
    }
}
}


 return (
    <div>
    <button onClick={Like}></button>
    <button onClick={Dislike}></button>
    </div>
  )
}

export default Like