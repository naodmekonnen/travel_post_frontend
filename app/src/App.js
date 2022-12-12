import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Posts from './components/Posts';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Test from './components/Test'
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-1800">

      <GlobalProvider>

        <BrowserRouter>
          <Navbar />

          {/* <h1>{process.env.REACT_APP_MYENVVAR}</h1> */}
          <Outlet />
          <Routes>
            
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/test' element={<Test />}></Route>

            
        </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </div>
  );
}

export default App;


