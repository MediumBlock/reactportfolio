import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { HashRouter, Route, Routes } from "react-router-dom"
import { ContextProvider } from './Hooks/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </ContextProvider>
);

