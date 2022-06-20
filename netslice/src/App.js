import logo from './logo.svg';
import './App.css';
import HomeBeforeLogin from './page/HomeBeforeLogin';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './page/Signup';
import Login from './page/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeBeforeLogin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;
