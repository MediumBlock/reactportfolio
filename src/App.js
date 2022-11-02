import React from "react";
import Navigation from "./components/Navigation";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { Routes, Route, useLocation, BrowserRouter as Router } from "react-router-dom"


function App() {
  
  return (
    <div>
      <Navigation />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
