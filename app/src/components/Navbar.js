import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full space-x-4 sticky top-0 overflow-hidden flex items-center justify-center'>
        <a href='home'>Home/viewPosts</a>
        <a href='about'>About</a>
        <a href='login'>Login</a>
        <a href='register'>Sign Up</a>
        <a href='post'>Make posts</a>
        <a href='profile'>Profile</a>


    </div>
  )
}

export default Navbar