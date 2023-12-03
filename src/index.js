import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import"bootstrap/dist/css/bootstrap.css";
import"bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home"
import Card from "./pages/Card"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>


      <Routes>


        <Route exat path ='/' element={<Home/>}  / >
        <Route exat path ='/Login' element={<App/>}  / >
        <Route exat path ='/Card' element={<Card/>}  / >
      </Routes>
    </Router>
  </React.StrictMode>
 );

