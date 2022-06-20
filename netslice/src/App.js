import './App.css';
import { Route,Routes } from 'react-router-dom'
import Main from './page/main';
import MyList from './page/myList';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path = "/" element= {<login/>}/>
      <Route path = "/main" element = {<Main/>} />
      <Route path = "/mylist" element = {<MyList/>} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
