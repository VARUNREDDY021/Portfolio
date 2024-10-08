import React from 'react';
import ReactDOM from 'react-dom/client';
import {UserContext} from './Components/Context/UserContext.jsx';
import UserContextProvider from './Components/Context/UserContext.jsx';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);


