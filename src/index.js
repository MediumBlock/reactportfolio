import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Context, ContextProvider } from './components/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

