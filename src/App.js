import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Documents from './components/Documents';
import Contacts from './pages/Contact';
import Services from './pages/Services';
import News from './pages/News';
import FAQ from './pages/FAQ';
import './App.css';
import QuickLinks from './pages/QuickLinks';
import Cards from './components/Cards';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/MahaPortal" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/quick-links" element={<QuickLinks />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cards" element={<Cards />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
