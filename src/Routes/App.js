// import logo from './logo.svg';
// import './App.css';
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from "../Pages/home";
import Boot from '../Pages/about';
import Referral from '../Pages/referral';

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          {/* <Route path="/" exact element={<Home />} /> */}
          {/* <Route path="/boot" element={<Boot />} /> */}
          <Route path="/ref/:value" element={<Referral />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
