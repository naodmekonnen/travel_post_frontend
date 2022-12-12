import React, { useState } from 'react'
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';


const Register = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        'firstName':'',
        'lastName':'',
        'email':'',
        'username':'',
        'password':'',
        'passwordConf':''
    })

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleRegister =(e) => {
        AuthService.register(user);
        navigate('/posts')
    }

    return (
        <div>

            <div className="bg-gradient-to-b from-blue-400 to-blue-1800 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-xl">

                    <form className="p-12 md:p-24"
                    onSubmit={handleRegister}>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' */}

                            {/* htmlFor='first_name'>First name: */}
                            {/* </label> */}
                            <input  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="text" 
                                id="firstname" 
                                placeholder="First Name"
                                required
                                onChange={(e) =>handleChange('firstName', e.target.value)} 
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'  */}
                            {/* htmlFor='lastname'>Last Name:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="text" 
                                id="lastname"  
                                placeholder="Last Name"
                                required
                                onChange={(e) =>handleChange('lastName', e.target.value)} 
 
                                
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' */}
                            {/* htmlFor='email'>Email:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="email" 
                                id="email" 
                                placeholder="Email"
                                required 
                                onChange={(e) => handleChange('email', e.target.value)} 

                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' */}
                            {/* htmlFor='username'>Username:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="text" 
                                id="username"  
                                placeholder="Username"
                                required
                                onChange={(e) => handleChange('username', e.target.value)} 
 
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' */}
                            {/* htmlFor='pass'>Password:</label> */}
                            <input  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="password" 
                                id="password" 
                                placeholder="Password"
                                minLength='8'
                                required
                                onChange={(e) =>handleChange('password', e.target.value)} 
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' */}
                            {/* htmlFor='pass'>Password:</label> */}
                            <input  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="password" 
                                id="password" 
                                placeholder="Confirm Password"
                                minLength='8'
                                required
                                onChange={(e) => handleChange('passwordConf', e.target.value)}
                                />
                        </div>
                        
                        
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
                        type='submit'
                        value='Register'
                        disabled={(
                            user.password &&
                            user.password.length >= 8 &&
                            user.password === user.passwordConf &&
                            user.firstName &&
                            user.lastName &&
                            user.email
                          ) ? false : true
                            }
                        
                        >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register