import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Posts from './components/Posts';
import Profile from './components/Profile';
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div className="App">

<GlobalProvider>

    <BrowserRouter>
    <Navbar />

      <h1>{process.env.REACT_APP_MYENVVAR}</h1>
      <Outlet />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/post' element={<Posts/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>



      </Routes>
    </BrowserRouter>
    </GlobalProvider>

    </div>
  );
}

export default App;

      
