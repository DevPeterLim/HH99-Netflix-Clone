import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

// Redux
import { Provider } from 'react-redux';
import store from './redux/configStore';


// Cookie
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
