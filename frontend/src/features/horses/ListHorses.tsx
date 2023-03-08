import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { createHorse, fetchHorses } from "./horsesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import AWS from "aws-sdk";

var albumBucketName = "anniina-react-spa-frontend";
var bucketRegion = "eu-north-1";
var IdentityPoolId = "eu-north-1:8124d7ec-2ed2-4c10-bccb-b9bd2b1323a0";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  }),
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName },
});

const addImage = (e: any) => {
  console.log(e.target.files[0]);

  var files = e.target.files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = "images/";

  var photoKey = albumPhotosKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file,
    },
  });

  var promise = upload.promise();

  promise.then(
    function (data) {
      alert("Successfully uploaded photo.");
    },
    function (err) {
      return alert("There was an error uploading your photo: ");
    }
  );
};

export const ListHorses = () => {
  const reduxState = useAppSelector((state) => state);
  const reduxDispatch = useAppDispatch();
  const [newHorseBreed, setNewHorseBreed] = useState("");
  const [newHorseName, setNewHorseName] = useState("");
  const [newHorseGender, setNewHorseGender] = useState("");
  const [newHorseDOB, setNewHorseDOB] = useState("");
  const [newHorseSire, setNewHorseSire] = useState("");
  const [newHorseDam, setNewHorseDam] = useState("");
  const [newHorseColor, setNewHorseColor] = useState("");
  const [newHorseHeight, setNewHorseHeight] = useState("");
  const [newHorseDiscpline, setNewHorseDiscpline] = useState("");
  const [newHorseOwner, setNewHorseOwner] = useState("");
  const [newHorseBreeder, setNewHorseBreeder] = useState("");
  const [newHorseBreederName, setNewHorseBreederName] = useState("");
  const [newHorseLocation, setNewHorseLocation] = useState("");
  const [newHorseRegCode, setNewHorseRegCode] = useState("");
  const [newHorseSireId, setNewHorseSireId] = useState("");
  const [newHorsDamId, setNewHorseDamId] = useState("");
  const [newHorsePersonality, setNewHorsePersonality] = useState("");
  const [newHorseCreatedDate, setNewHorseCreatedDate] = useState("");
  const [newHorseImages, setNewHorseImages] = useState({ img: "" });

  useEffect(() => {
    reduxDispatch(fetchHorses());
  }, [reduxDispatch]);

  return (
    <div>
      {reduxState.horses.errorMessage !== null && (
        <strong>Error: {reduxState.horses.errorMessage}</strong>
      )}
      <h1>Your horses</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Breed</th>
          </tr>
        </thead>
        <tbody>
          {reduxState.horses.horses.map((horse) => (
            <tr key={horse.id}>
              <td>{horse.id}</td>
              <td>{horse.name}</td>
              <td>{horse.breed}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
