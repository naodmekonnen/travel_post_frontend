import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from "../context/GlobalState";



const Navbar = () => {

  const [ state, dispatch ] = useGlobalState();


  return (

<div className="w-full antialiased font-medium md:p-4 flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-2">
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="home">Home</a>
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="posts">Posts</a>
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="login">Login</a>
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="register">Sign Up</a>
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href={state.currentUser && ("profile")}>My Profile</a>
    <a className="hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="test">Temp</a>
</div>
  )
}
export default Navbar


