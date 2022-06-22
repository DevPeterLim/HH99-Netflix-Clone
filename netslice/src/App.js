import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './page/main';
import MyList from './page/myList';
import Signup from './page/Signup';
import Login from './page/Login';
import Detail from './page/Detail';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomeBeforeLogin from './page/HomeBeforeLogin';


function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<HomeBeforeLogin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path = "/main" element = {<Main/>} />
      <Route path = "/detail/:id" element = {<Detail/>} />
      <Route path = "/mylist" element = {<MyList/>} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;