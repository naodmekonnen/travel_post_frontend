import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from "../context/GlobalState";



function NavBar() {
  const [ state, dispatch ] = useGlobalState();

  return (
    <nav>
      <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/matches">Matches</Link>
        </li> */}
        {
          !state.currentUser && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )
        }
        {
          state.currentUser && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )
        }
        {
          !state.currentUser && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )
        }
        {
          state.currentUser && (
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          )
        }
        {
          state.currentUser && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}

export default NavBar;












// export default Navbar
// import { Link } from "react-router-dom";
// import { useGlobalState } from "../context/GlobalState";

// function NavBar() {
//   const [ state, dispatch ] = useGlobalState();

//   return (
//     <nav>
//       <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {
//           !state.currentUser && (
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           )
//         }
//         {
//           state.currentUser && (
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//           )
//         }
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;



{/* <div className="w-full antialiased font-medium md:p-4 flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:p0">
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="home">Home</a>
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="posts">Posts</a>
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="login">Login</a>
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="register">Sign Up</a>
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href={state.currentUser && ("profile")}>My Profile</a>
    <a className="border-0 p-3 w-full text-xl text-center text-gray-600 font-semibold" href="logout">Logout</a> */}