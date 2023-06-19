import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchHorses } from "./horsesSlice";

import Table from "react-bootstrap/Table";

export const ListHorses = () => {
  const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();

  useEffect(() => {
    reduxDispatch(fetchHorses());
  }, [reduxDispatch]);

  return (
    <div>
      {reduxState.horses.errorMessage !== null && (
        <strong>Error: {reduxState.horses.errorMessage}</strong>
      )}
      <h1>Our horses</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Color</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {reduxState.horses.horses.map((horse) => (
            <tr key={horse.id}>
              <td><a href={"/horse/" + horse.id}>{horse.name}</a></td>
              <td>{horse.breed}</td>
              <td>{horse.gender}</td>
              <td>{horse.color}</td>
              <td>{horse.height}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
