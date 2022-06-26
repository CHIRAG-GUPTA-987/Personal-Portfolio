import React,{useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Services from './components/Services';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const containerStyles = {
    display: 'flex',
    height: '100vh',
    border: '0.1rem solid #8d99ae',
    overflow: 'hidden',
    boxSizing: 'borderBox',
    backgroundColor: 'rgb(220, 227, 245)'
  }
  const addTitle = () =>{
    document.title = 'Chirag Gupta';
  }
  useEffect(()=>{
    addTitle();
  }, [])
  return (
    <div className="container" style={containerStyles}>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/ChiragGupta" element={<Home/>}/>
          <Route path="/ChiragGupta/Intro" element={<Intro/>}/>
          <Route path="/ChiragGupta/Services" element={<Services/>}/>
          <Route path="/ChiragGupta/Blogs" element={<Blogs/>}/>
          <Route path="ChiragGupta/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
