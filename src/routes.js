import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./pages/auth/Auth";
import Deals from "./pages/deals/Deals";
import Employees from "./pages/employees/Employees";
import Home from "./pages/Home/Home";
import Kanban from "./pages/kanban/Kanban";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="*" element={<span>такой страницы нет - 404</span>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
