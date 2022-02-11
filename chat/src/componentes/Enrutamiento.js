import React from "react";
import Login from "./Login";
import Conexion from "./Conexion";
import Traer from "./mostrar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Enrutar() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="conexion" element={<Conexion />} />
            <Route index element={<Login/>} />
            <Route path="traer" element={<Traer/>} />
        </Routes>
      </BrowserRouter>
    );
  }
