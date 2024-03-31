import './App.css';
import './NavBar.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewsFeed from './components/NewsFeed';
import Home from './components/Home';

function App() {

  return (
    <div className="App flexbox-container">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<NewsFeed category={ "sports" } />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
