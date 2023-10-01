import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './css/App.css';
import './css/navbar.css';
import './css/home.css';
import './css/footer.css';
import { Dashboard } from './pages/dashboard'
import { Home } from './pages/home'
import { Library } from './pages/library'
import { Wallet } from './pages/wallet'
import { Memenu } from './pages/memenu'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/me" element={<Memenu />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
