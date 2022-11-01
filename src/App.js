import React from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
