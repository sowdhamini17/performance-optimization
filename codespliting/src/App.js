import './App.css';
import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Lazy loading components
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
