import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchHorse } from "./horsesSlice";

export const HorseProfile = () => {
  //const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();

  const params = useParams();

  console.log(params.horseId);

  useEffect(() => {
    reduxDispatch(fetchHorse());
  }, [reduxDispatch]);

  return (
    <div>
      <h1>Horse profile page</h1>
      <h2>{params.horseId}</h2>
    </div>
  );
};
