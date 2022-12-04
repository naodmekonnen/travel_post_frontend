import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
