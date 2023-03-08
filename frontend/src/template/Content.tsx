import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListHorses } from "../features/horses/ListHorses";
import { HorseProfile } from "../features/horses/HorseProfile";
import { AddHorse } from "../features/horses/AddHorse";

export const Content = () => {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <BrowserRouter>
          <Routes>
            <Route path="horses" element={<ListHorses />} />
            <Route path="horse/:horseId" element={<HorseProfile />} />
            <Route path="horse/add" element={<AddHorse />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Content;
