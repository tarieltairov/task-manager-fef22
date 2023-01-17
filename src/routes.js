import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";
import Employees from "./pages/employees/Employees";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<span>такой страницы нет - 404</span>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
