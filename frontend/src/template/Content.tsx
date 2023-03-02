import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Horses } from "../features/horses/Horses";
import { HorseProfile } from "../features/horses/HorseProfile";

export const Content = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="horses" element={<Horses />} />
            <Route path="horse/:horseId" element={<HorseProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Content;
