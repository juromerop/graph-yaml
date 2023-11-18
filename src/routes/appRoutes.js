import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Board from "../pages/board";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
