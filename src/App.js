import React from "react";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"


function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Navigation />} />
      </Routes>
    </div>
  );
}

export default App;
