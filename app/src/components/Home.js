import React from 'react'
import request from '../services/api.request'
import { useState, useEffect } from 'react'
import { useGlobalState } from '../context/GlobalState'


const HomePage = () => {
    
  return (
        <div>
            <div className='bg-gradient-to-b from-blue-400 to-blue-1800 h-screen overflow-hidden flex items-center justify-center'>
                <h1>Homepage</h1>
                <div></div>
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                </div>
            </div>
        </div>
            )
}

export default HomePage