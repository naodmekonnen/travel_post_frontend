import React, { useState } from 'react'
import AuthService from '../services/auth.service';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Register = () => {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        'first_name':'',
        'last_name':'',
        'email':'',
        'username':'',
        'password':''
    })

    const handleChange = (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const handleRegister =(e) => {
        AuthService.register(user);
        navigate('/home')
    }

    // const submitUser = () => {
    //     axios.post('https://8000-naodmekonne-travelpostb-m4zblizjy31.ws-us77.gitpod.io/api/user/create/', {
    //         'first_name':first_name,
    //         'last_name':last_name,
    //         'email':email,
    //         'username':username
    //     })
    // }

    return (
        <div>

            <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">

                    <form onSubmit={handleRegister}className="p-12 md:p-24">
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='first_name'>First name:</label> */}
                            <input  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="text" 
                                id="firstname" 
                                placeholder="First Name"
                                required
                                onChange={(e) =>handleChange('first_name', e.target.value)} 
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='lastname'>Last Name:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="text" 
                                id="lastname"  
                                placeholder="Last Name"
                                required
                                onChange={(e) =>handleChange('last_name', e.target.value)} 
 
                                
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='email'>Email:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="email" 
                                id="email" 
                                placeholder="email"
                                required 
                                onChange={(e) =>handleChange('email', e.target.value)} 

                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='username'>Username:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="text" 
                                id="username"  
                                placeholder="Username"
                                required
                                onChange={(e) =>handleChange('username', e.target.value)} 
 
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='pass'>Password:</label> */}
                            <input  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" 
                                type="password" 
                                id="password" 
                                placeholder="Password"
                                minLength='8'
                                required
                                onChange={(e) =>handleChange('password', e.target.value)} 
 
                            />
                        </div>
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
                        type='submit'
                        value='Register'
                        disabled={(
                            user.password &&
                            user.password.length >=8 &&
                            user.first_name &&
                            user.last_name &&
                            user.email)
                            ? false : true
                            }
                        
                        >Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register