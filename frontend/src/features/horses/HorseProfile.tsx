import React, { useEffect, useState, useCallback } from "react";
import { useParams } from 'react-router';

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchHorse } from "./horsesSlice";

import ReactMarkdown from 'react-markdown'
import Tree from 'react-d3-tree';

export const HorseProfile = () => {
  const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();

  const params = useParams()

  useEffect(() => {
    reduxDispatch(fetchHorse({ horseId: params.horseId }));
  }, [reduxDispatch]);

  const getAncestorName = (ancestor: string) => {
    if (typeof (reduxState.horses.horses as any)["pedigree"] !== "undefined") {
      if (typeof (reduxState.horses.horses as any)["pedigree"][ancestor] !== "undefined") {
        const item = (reduxState.horses.horses as any)["pedigree"][ancestor];
        return item.name;
      } else {
        return "unknown"
      }
    } else {
      return "unknown";
    }
  }

  const getAncestorAttr = (ancestor: string) => {
    if (typeof (reduxState.horses.horses as any)["pedigree"] !== "undefined") {
      const item = (reduxState.horses.horses as any)["pedigree"][ancestor];
      return { url: item.address };
    } else {
      return { url: "" };
    }
  }

  const orgChart = {

    name: (reduxState.horses.horses as any)["name"],
    children: [
      {
        name: getAncestorName("Sire"),
        attributes: getAncestorAttr("Sire"),
        children: [
          {
            name: getAncestorName("Sire_s"),
            attributes: getAncestorAttr("Sire_s"),
            children: [
              { name: getAncestorName("Sire_ss") },
              { name: getAncestorName("Sire_sd") }
            ]
          },
          {
            name: getAncestorName("Sire_d"),
            attributes: getAncestorAttr("Sire_d"),
            children: [
              { name: getAncestorName("Sire_ds") },
              { name: getAncestorName("Sire_dd") }
            ]
          },
        ],
      },
      {
        name: getAncestorName("Dam"),
        attributes: getAncestorAttr("Dam"),
        children: [
          {
            name: getAncestorName("Dam_s"),
            attributes: getAncestorAttr("Dam_s"),
            children: [
              { name: getAncestorName("Dam_ss") },
              { name: getAncestorName("Dam_sd") }
            ]
          },
          {
            name: getAncestorName("Dam_d"),
            attributes: getAncestorAttr("Dam_d"),
            children: [
              { name: getAncestorName("Dam_ds") },
              { name: getAncestorName("Dam_dd") }
            ]
          },
        ],
      },
    ],
  };

  const nodeSize = { x: 400, y: 50 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20, y: -15 };

  const renderForeignObjectNode = ({ foreignObjectProps, nodeDatum }: { foreignObjectProps: any, nodeDatum: any }) => (
    <g>
      <circle r={15}></circle>
      <foreignObject {...foreignObjectProps}>
        {nodeDatum.attributes?.url ? <a href={nodeDatum.attributes?.url}>{nodeDatum.name}</a> : nodeDatum.name}

      </foreignObject>
    </g>
  );

  const formatDate = (newTimestmap: number) => {
    const toNumber = Number(newTimestmap);
    const date = new Date(toNumber * 1000);
    return date.toLocaleDateString('en-GB');
  }


  return (
    <div className="container">
      {reduxState.horses.errorMessage !== null && (
        <strong>Error: {reduxState.horses.errorMessage}</strong>
      )}
      <p style={{ fontWeight: "bold" }}>This is a sim-game horse / Tämä on virtuaalihevonen</p>
      <>
        {/* <!-- Horse details table section --> */}
        <div className="row">
          <div className="col-sm-5">
            <h2 className="mb-4">Information</h2>
            <table className="table table-striped col horseInfo">
              <tbody>
                <tr>
                  <td style={{ width: "40%" }}>Name</td>
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
                  <td>{formatDate((reduxState.horses.horses as any)["dob"])}</td>
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
                  <td>Importer Name</td>
                  <td>{(reduxState.horses.horses as any)["importerName"]}</td>
                </tr>
                <tr>
                  <td>Importer Email</td>
                  <td>{(reduxState.horses.horses as any)["importerEmail"]}</td>
                </tr>
                <tr>
                  <td>Discipline</td>
                  <td>{(reduxState.horses.horses as any)["discpline"]}</td>
                </tr>
                <tr>
                  <td>Registration number</td>
                  <td>{(reduxState.horses.horses as any)["regCode"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-2">
            <h2 className="mb-4">Attributes</h2>
            <table className="table table-striped col horseInfo">
              <tbody>
                <tr>
                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["speed"]}</td>
                  <td>Speed</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["stamina"]}</td>
                  <td>Stamina</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["courage"]}</td>
                  <td>Courage</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["obedience"]}</td>
                  <td>Obedience</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["agility"]}</td>
                  <td>Agility</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["gait"]}</td>
                  <td>Gait</td>
                </tr>
                <tr>

                  <td>{(reduxState.horses.horses as any)["attributes"] && (reduxState.horses.horses as any)["attributes"]["confidence"]}</td>
                  <td>Confidence</td>
                </tr>
              </tbody>
            </table>
            {/* <!-- Image gallery section --> */}
            <div>
              {/* <!-- Image gallery section --> */}
              <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href={(reduxState.horses.horses as any)["images"] && (reduxState.horses.horses as any)["images"][0]["url"]} ><img src={(reduxState.horses.horses as any)["images"] && (reduxState.horses.horses as any)["images"][0]["url"]} className="d-block w-150" style={{ width: "200px" }} alt="horse image" /></a>
                  </div>
                  <div className="carousel-item">
                    <img src="https://via.placeholder.com/200x200" className="d-block w-150" alt="horse image" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://via.placeholder.com/200x200" className="d-block w-150" alt="horse image" />
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
            </div>
          </div>
          <div className="col-sm-5 horsePersonality">
            <h2 className="mb-4" style={{ fontStyle: "initial" }}>Personality</h2>
            <ReactMarkdown children={(reduxState.horses.horses as any)["personality"]} />
          </div>
        </div>
        <div className="row">
          <h2 className="mb-4">Pedigree</h2>
          <div id="treeWrapper" style={{ width: '100%', height: '30em' }}>

            {(reduxState.horses.horses as any).length !== 0 &&

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
                renderCustomNodeElement={(props) =>
                  renderForeignObjectNode({ ...props, foreignObjectProps })
                }
                orientation="horizontal" />}
          </div>
        </div>
        <div className="row">
          {/* 
          <h2 className="mb-4">Competitions</h2>
          <p>No competitions.</p>
          
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
          */}
        </div>
      </>

    </div>
  );
};
