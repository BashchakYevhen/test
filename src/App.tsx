import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/mainPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {

  return (<>
    <Routes>
      <Route path="/products" element={<MainPage />} />
      <Route path="*" element={<Navigate to="/products" />} />
    </Routes>
    < ToastContainer position="top-right"
      theme="light" />
  </>)
}

export default App;
