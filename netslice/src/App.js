import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './page/main';
import MyList from './page/myList';
import Signup from './page/Signup';
import Login from './page/Login';
import Detail from './page/Detail';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomeBeforeLogin from './page/HomeBeforeLogin';
import MyPage from './page/MyPage';
import MyProfileImages from './page/MyProfileImages';
import ProfileChangeCheck from './page/ProfileChangeCheck';
import PwChange from './page/PwChange';
import Genre from './page/Genre';

function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/' element={<HomeBeforeLogin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path = "/main" element = {<Main/>} />
      <Route path = "/main/:genre" element = {<Genre/>} />
      <Route path = "/detail/:id" element = {<Detail/>} />
      <Route path = "/mylist" element = {<MyList/>} />
      <Route path = "/mypage" element = {<MyPage/>} />
      <Route path = "/mypage/images" element = {<MyProfileImages/>} />
      <Route path = "/mypage/images/changecheck" element = {<ProfileChangeCheck/>} />
      <Route path = "/pwchange" element = {<PwChange/>} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;