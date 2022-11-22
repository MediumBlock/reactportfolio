import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './components/Layout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          <Route path="*" element={<App />}>
          </Route>
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  </React.StrictMode>
);

