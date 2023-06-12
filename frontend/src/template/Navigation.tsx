import React, { useState, useEffect } from "react";

export const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Spellbound Equine Meadows</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="/about-us" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li><a className="dropdown-item text-light" href="/about-us/lore">Lore</a></li>
                  <li><a className="dropdown-item text-light" href="/about-us/surroundings">Surroundings</a></li>
                  <li><a className="dropdown-item text-light" href="/about-us/thebjornsens">The Bjørnsen</a></li>
                  <li><a className="dropdown-item text-light" href="/about-us/staff">Staff</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/horses">Our Horses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Homepage</a></li>
          <li className="breadcrumb-item"><a href="#">Homepage</a></li>
          {/* <li className="breadcrumb-item"><a href="#">Category</a></li> */}
          {/*<li className="breadcrumb-item active" aria-current="page"></li> */}
        </ol>
      </nav>
    </>
  );
};
