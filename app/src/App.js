import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';



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
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </GlobalProvider>

    </div>
  );
}

export default App;

      
