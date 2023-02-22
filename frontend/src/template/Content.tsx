import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Horses } from "../features/horses/Horses";

export const Content = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="horses" element={<Horses />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Content;
