import React from 'react';
import homeimage from '../assets/homeimage.jpg';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





const HomePage = () => {

  let navigate = useNavigate();


  return (

    <div className='grid place-items-center h-screen rounded-lg shadow-2xl'>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Travel Post</h1>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={homeimage} alt=""></img>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">


              <p className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                Share your travel stories
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                An app for you to document and share your travel memories. Keep your friends updated on all your adventures.
                share experiences and recommendations, offer tips and advice, and/or discuss important info about specific destinations or travel-related topics
              </p>
              <div className='mt-4'>
              <Link className='class="inline-block text-blue-500 underline hover:text-blue-400 'to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default HomePage



