import React from 'react'

const Register = () => {
    return (
        <div>

            <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">

                    <form className="p-12 md:p-24">
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <input type="text" id="firstname" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="First Name" />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <input type="text" id="lastname" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Last Name" />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <input type="email" id="email" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="email" />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <input type="text" id="username" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Username" />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            <input type="password" id="password" className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
                        </div>
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register