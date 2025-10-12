import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

// Import your components
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './components/Home/index';
import Segments from './components/Segments/index';
import Registration from './components/Registration/index';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Sponsors from "./components/Sponsers";
import  ProgrammeShedule from "./components/ProgrammeShedule"


function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/programmeshedule" element={<ProgrammeShedule />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="/sponsers" element={<Sponsors />} />
               <Route path="/registration" element={<Registration />} />
              {/* Add more routes here as needed */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;