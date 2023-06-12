import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListHorses } from "../features/horses/ListHorses";
import { HorseProfile } from "../features/horses/HorseProfile";
import { Homepage } from "../pages/homepage";
import { AboutUs } from "../pages/AboutUs";
import { Lore } from "../pages/Lore";
import { Surroundings } from "../pages/surroundings";
import { TheBjornsens } from "../pages/TheBjornsens";
import { Staff } from "../pages/Staff";
import { TestChat } from "../pages/TestChat";
import { AddHorse } from "../features/horses/AddHorse";

export const Content = () => {
  return (
    <>
      <div className="container">
        <div className="mt-5">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/about-us/lore" element={<Lore />} />
              <Route path="/about-us/surroundings" element={<Surroundings />} />
              <Route path="/about-us/thebjornsens" element={<TheBjornsens />} />
              <Route path="/about-us/staff" element={<Staff />} />
              <Route path="/horses" element={<ListHorses />} />
              <Route path="/horse/:horseId" element={<HorseProfile />} />
              <Route path="/chat-test" element={<TestChat />} />
              {/* <Route path="horse/add" element={<AddHorse />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">© 2023 Spellbound Equine Meadows ~ Tilli / tilli@virtuaali.net ~ Tämä on virtuaalitalli / This is a sim-game stable</span>
        </div>
      </footer>
    </>
  );
};

export default Content;
