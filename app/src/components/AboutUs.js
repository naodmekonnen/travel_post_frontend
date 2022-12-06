import React from 'react'
import image1 from '../assets/image1.jpg'

const AboutUs = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-2xl sm:text-7xl font-bold text-white px-16'>
                App Info
            </h2>
            <p className='text-gray-500 max-w-md px-8 py-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
            </p>

            <p className='text-gray-500 max-w-md px-8 py-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
            </p>
                
        </div>
        <div>
            <img src={image1} 
            alt='profileimg' 
            className='rounded-2xl mx-auto object-contain h-96 w-96 md:w-full'></img>
        </div>
      </div>
    </div>
  )
}
export default AboutUs