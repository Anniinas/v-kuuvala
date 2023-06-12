import React, { useEffect, useState, useCallback } from "react";
import { useParams } from 'react-router';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchHorse } from "./horsesSlice";


import Table from "react-bootstrap/Table";

import ReactMarkdown from 'react-markdown'
import Tree from 'react-d3-tree';

export const HorseProfile = () => {
  const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();

  const params = useParams()
  //console.log(params.horseId);

  useEffect(() => {
    reduxDispatch(fetchHorse({ horseId: params.horseId }));
  }, [reduxDispatch]);

  const horse = (reduxState.horses.horses as any);


  if (horse.length !== 0) {
    console.log("horse found");
    console.log((reduxState.horses.horses as any));
  }


  const orgChart = {

    name: (reduxState.horses.horses as any)["name"],
    children: [
      {
        name: horse["pedigree"]["Sire"] && horse["pedigree"]["Sire"]["name"] || "unknown",
        children: [
          {
            name: horse["pedigree"]["Sire_s"] && horse["pedigree"]["Sire_s"]["name"] || "unknown",
            children: [
              { name: horse["pedigree"]["Sire_ss"] && horse["pedigree"]["Sire_ss"]["name"] || "unknown" },
              { name: horse["pedigree"]["Sire_se"] && horse["pedigree"]["Sire_se"]["name"] || "unknown" }
            ]
          },
          {
            name: horse["pedigree"]["Sire_d"] && horse["pedigree"]["Sire_d"]["name"] || "unknown",
            children: [
              { name: horse["pedigree"]["Sire_ds"] && horse["pedigree"]["Sire_ds"]["name"] || "unknown" },
              { name: horse["pedigree"]["Sire_dd"] && horse["pedigree"]["Sire_dd"]["name"] || "unknown" }
            ]
          },
        ],
      },
      {
        name: horse["pedigree"]["Dam"] && horse["pedigree"]["Dam"]["name"] || "unknown",
        children: [
          {
            name: horse["pedigree"]["Dam_s"] && horse["pedigree"]["Dam_s"]["name"] || "unknown",
            children: [
              { name: horse["pedigree"]["Dam_ss"] && horse["pedigree"]["Dam_ss"]["name"] || "unknown" },
              { name: horse["pedigree"]["Dam_sd"] && horse["pedigree"]["Dam_sd"]["name"] || "unknown" }
            ]
          },
          {
            name: horse["pedigree"]["Dam_d"] && horse["pedigree"]["Dam_d"]["name"] || "unknown",
            children: [
              { name: horse["pedigree"]["Dam_ds"] && horse["pedigree"]["Dam_ds"]["name"] || "unknown" },
              { name: horse["pedigree"]["Dam_sd"] && horse["pedigree"]["Dam_sd"]["name"] || "unknown" }
            ]
          },
        ],
      },
    ],
  };


  return (
    <div className="container">
      {reduxState.horses.errorMessage !== null && (
        <strong>Error: {reduxState.horses.errorMessage}</strong>
      )}

      {/* <!-- Image gallery section --> */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/500x200" className="d-block w-100" alt="horse image" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/500x200" className="d-block w-100" alt="horse image" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/500x200" className="d-block w-100" alt="horse image" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      <>
        {/* <!-- Horse details table section --> */}
        <div className="row">
          <h2 className="mb-4">Information</h2>
          <table className="table table-striped col horseInfo">
            <tbody>

              <>
                <tr>
                  <td>Name</td>
                  <td>{(reduxState.horses.horses as any)["name"]}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{(reduxState.horses.horses as any)["gender"]}</td>
                </tr>
                <tr>
                  <td>Breed</td>
                  <td>{(reduxState.horses.horses as any)["breed"]}</td>
                </tr>
                <tr>
                  <td>Date of Birth</td>
                  <td>{(reduxState.horses.horses as any)["dob"]}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{(reduxState.horses.horses as any)["color"]}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{(reduxState.horses.horses as any)["height"]}cm</td>
                </tr>
                <tr>
                  <td>Owner Name</td>
                  <td>{(reduxState.horses.horses as any)["owner"]}</td>
                </tr>
                <tr>
                  <td>Owner Email</td>
                  <td>{(reduxState.horses.horses as any)["ownerEmail"]}</td>
                </tr>
                <tr>
                  <td>Breeder Name</td>
                  <td>{(reduxState.horses.horses as any)["breederName"]}</td>
                </tr>
                <tr>
                  <td>Breeder Email</td>
                  <td>{(reduxState.horses.horses as any)["breederEmail"]}</td>
                </tr>
                <tr>
                  <td>Discipline</td>
                  <td>{(reduxState.horses.horses as any)["discpline"]}</td>
                </tr></>

            </tbody>
          </table>
          <div className="col horsePersonality"><ReactMarkdown children={(reduxState.horses.horses as any)["personality"]} /></div>
        </div>
        <div className="row">
          <h2 className="mb-4">Pedigree</h2>
          <div id="treeWrapper" style={{ width: '100%', height: '30em' }}>

            <Tree data={orgChart}
              pathFunc="elbow"
              rootNodeClassName="node__root"
              nodeSize={{ x: 250, y: 40 }}
              branchNodeClassName="node__branch"
              leafNodeClassName="node__leaf"
              translate={{ x: 60, y: 240 }}
              collapsible={false}
              zoomable={false}
              draggable={false}
              orientation="horizontal" />
          </div>
        </div>
        <div className="row">
          <h2 className="mb-4">Competitions</h2>
          <div className="table-responsive">
            <table className="table table-sm table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Discipline</th>
                  <th>Class</th>
                  <th>Event Organizer</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>June 1, 2021</td>
                  <td>Show Jumping</td>
                  <td>1.20m</td>
                  <td>Example Event Co.</td>
                  <td>1st Place</td>
                </tr>
                <tr>
                  <td>July 15, 2021</td>
                  <td>Dressage</td>
                  <td>Preliminary</td>
                  <td>Example Event Co.</td>
                  <td>2nd Place</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>

    </div>
  );
};
