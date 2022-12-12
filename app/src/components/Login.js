import React, { useState } from "react"
import AuthService from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";



const Login = () => {
    let navigate = useNavigate();

    const [ state, dispatch ] = useGlobalState();
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      AuthService
        .login(username, password)
        .then(async (resp) => {
          let data = jwtDecode(resp.access)
          await dispatch({
            currentUserToken: resp.access,
            currentUser: data
          })
          navigate('/posts')
        });
    }


return (
        <div>
            <div className="bg-gradient-to-b from-blue-400 to-blue-1800 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-xl">
                   
                    <form className="p-12 md:p-24"
                    onSubmit={handleLogin} 
                    >
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='username'>Username:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="text" 
                                id="username"  
                                placeholder="Username" 
                                required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center text-lg mb-6 md:mb-8">
                            {/* <label htmlFor='pass'>Password:</label> */}
                            <input className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                                type="password" 
                                id="password"  
                                placeholder="Password" 
                                minLength='8'
                                required
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <button className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
                        type='submit'
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
