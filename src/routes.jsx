import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './components/Home/index';
import Segments from './components/Segments/index';
import Registration from './components/Registration/index';
import About from './components/About/index';
import Contact from './components/Contact/index';

function AppRoutes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Header />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default AppRoutes;