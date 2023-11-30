
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import TvShow from './components/TvShow.jsx'
import Trending from './components/Trending.jsx'
import Movies from './components/Movies.jsx'
import Sports from './components/Sports.jsx'
import Kids from './components/Kids.jsx'
import Navbar from './Navbar.js';
import { Register } from './components/Auth/Register.js';
import { Login } from './components/Auth/Login.js';



function App() {
  return (
    <div className="App">
        <Navbar/>

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/tv_show" element={<TvShow/>}/>
        <Route path="/trending" element={<Trending/>}/> 
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path='/login'   element={<Login /> } />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </div>
  );
}

export default App;
