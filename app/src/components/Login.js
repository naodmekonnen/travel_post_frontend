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
            <div className="bg-yellow-400 h-screen overflow-hidden flex items-center justify-center">
                <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                   
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



// import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalState";
// import AuthService from "../services/auth.service";
// import logo from "/workspace/esports_tracker_final_project_frontend/app/src/img/Logo.png";
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// function GetHeader() {
//   let navigate = useNavigate();
//   const [state, dispatch] = useGlobalState();
//   const logout = () => {
//     AuthService
//         .logout();
//       dispatch({
//         currentUserToken: null,
//           currentUser: null
//       })
//     navigate("/Home")
// }
//     return (
//         <div className="row" color="orange">
//       <div className="col">
//         <nav className="navbar navbar-expand-lg bg-light">
//           <div className="container-fluid">
//             <Link to="home">
//             <img
//               style={{ width: "100px", height: "100px" }}
//               className="navbar-brand"
//               href="Home"
//               src={logo}
//               ></img>
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//               >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="Home"
//                     >
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="About">
//                     About
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="Team_Selection">
//                     Teams
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="Schedule">
//                     Schedule
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="Video">
//                     Video
//                   </a>
//                 </li>
//                   {
//                     state.currentUser && (
//                         <li className="nav-item">
//                   <a className="nav-link" href="/profile">
//                     Profile
//                   </a>
//                 </li>
//                 )}
//               </ul>
//             </div>
//             {
//               !state.currentUser && (
//                 <Link to="/login">Login</Link>
//             )}
//           {
//             !state.currentUser && (
//               <Link to="/register">Register</Link>
//               )}
//               {/* {
//                 state.currentUser && (
//                 <p>{state.currentUser.username}</p>
//               )} */}
//         {
//           state.currentUser && (
//       <Button className="button" onClick={() => logout()}>Logout</Button>
//         )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }