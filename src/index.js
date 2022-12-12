import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ContextProvider } from './Hooks/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ContextProvider>
);

