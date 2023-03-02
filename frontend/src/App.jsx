import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estabelecimentos from "./Components/Estabelecimentos";
import Home from "./Components/Home";
import Admin from "./Components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="estabelecimentos/*" element={<Estabelecimentos />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
