import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { createHorse, fetchHorses } from "./horsesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";

import AWS from "aws-sdk";

/*
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

*/
export const AddHorse = () => {
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
  const [newHorseOwnerEmail, setNewHorseOwnerEmail] = useState("");
  const [newHorseBreeder, setNewHorseBreeder] = useState("");
  const [newHorseBreederName, setNewHorseBreederName] = useState("");
  const [newHorseBreederEmail, setNewHorseBreederEmail] = useState("");
  const [newHorseLocation, setNewHorseLocation] = useState("");
  const [newHorseRegCode, setNewHorseRegCode] = useState("");
  const [newHorseSireId, setNewHorseSireId] = useState("");
  const [newHorsDamId, setNewHorseDamId] = useState("");
  const [newHorsePersonality, setNewHorsePersonality] = useState("");
  //const [newHorseCreatedDate, setNewHorseCreatedDate] = useState("");
  //const [newHorseImages, setNewHorseImages] = useState({ img: "" });

  useEffect(() => {
    reduxDispatch(fetchHorses());
  }, [reduxDispatch]);

  const timestamp = new Date();
  const createdDate = timestamp.toString();

  return (
    <div>
      {reduxState.horses.errorMessage !== null && (
        <strong>Error: {reduxState.horses.errorMessage}</strong>
      )}
      <h1>Add horse</h1>
      <form
        onSubmit={(e) => {
          reduxDispatch(
            createHorse({
              breed: newHorseBreed,
              name: newHorseName,
              gender: newHorseGender,
              dob: newHorseDOB,
              sireId: newHorseSire,
              damId: newHorseDam,
              color: newHorseColor,
              height: newHorseHeight,
              discpline: newHorseDiscpline,
              owner: newHorseOwner,
              ownerEmail: newHorseOwnerEmail,
              breeder: newHorseBreeder,
              breederName: newHorseBreederName,
              breederEmail: newHorseBreederEmail,
              location: newHorseLocation,
              regCode: newHorseRegCode,
              personality: newHorsePersonality,
              createdDate: createdDate,
              //images: newHorseImages,
            })
          );
          e.preventDefault();
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <Form.Label htmlFor="create-server-name">Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="create-server-name"
                  aria-describedby="create-server-name"
                  value={newHorseName}
                  placeholder=""
                  onChange={(e) => setNewHorseName(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-breed">Breed</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="create-server-breed"
                  aria-describedby="create-server-breed"
                  value={newHorseBreed}
                  placeholder=""
                  onChange={(e) => setNewHorseBreed(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-gender">Gender</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="gender"
                  aria-describedby="gender"
                  value={newHorseGender}
                  placeholder=""
                  onChange={(e) => setNewHorseGender(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-birthdate">
                Date of Birth
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="birthdate"
                  aria-describedby="birthdate"
                  value={newHorseDOB}
                  placeholder=""
                  onChange={(e) => setNewHorseDOB(e.target.value)}
                  type="date"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-color">Color</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="color"
                  aria-describedby="color"
                  value={newHorseColor}
                  placeholder=""
                  onChange={(e) => setNewHorseColor(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-height">Height</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="height"
                  aria-describedby="height"
                  value={newHorseHeight}
                  placeholder=""
                  onChange={(e) => setNewHorseHeight(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-discpline">
                Discpline
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="discpline"
                  aria-describedby="discpline"
                  value={newHorseDiscpline}
                  placeholder=""
                  onChange={(e) => setNewHorseDiscpline(e.target.value)}
                  type="text"
                />
              </InputGroup>
            </div>
            <div className="col-lg-4 col-md-12">
              <Form.Label htmlFor="create-server-owner">Owner</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="owner"
                  aria-describedby="owner"
                  value={newHorseOwner}
                  placeholder=""
                  onChange={(e) => setNewHorseOwner(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-breeder">Breeder</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="breeder"
                  aria-describedby="breeder"
                  value={newHorseBreeder}
                  placeholder=""
                  onChange={(e) => setNewHorseBreeder(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-breeder-name">
                Breeder name
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="breeder-name"
                  aria-describedby="breeder-name"
                  value={newHorseBreederName}
                  placeholder=""
                  onChange={(e) => setNewHorseBreederName(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-location">Location</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="location"
                  aria-describedby="location"
                  value={newHorseLocation}
                  placeholder=""
                  onChange={(e) => setNewHorseLocation(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-reg-code">Reg.code</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="reg-code"
                  aria-describedby="reg-code"
                  value={newHorseRegCode}
                  placeholder=""
                  onChange={(e) => setNewHorseRegCode(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-sireId">Sire</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="sireId"
                  aria-describedby="sireIde"
                  value={newHorseSireId}
                  placeholder=""
                  onChange={(e) => setNewHorseSireId(e.target.value)}
                  type="text"
                />
              </InputGroup>
              <Form.Label htmlFor="create-server-sireId">Dam</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="damId"
                  aria-describedby="damId"
                  value={newHorsDamId}
                  placeholder=""
                  onChange={(e) => setNewHorseDamId(e.target.value)}
                  type="text"
                />
              </InputGroup>
            </div>
            <div className="col-lg-4 col-md-12">
              <Form.Label htmlFor="create-server-personality">
                Personality
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  id="personality"
                  aria-describedby="personality"
                  value={newHorsePersonality}
                  placeholder=""
                  onChange={(e) => setNewHorsePersonality(e.target.value)}
                  type="text"
                />
              </InputGroup>
              {/* 
              <Form.Label htmlFor="create-server-images">Image(s)</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="images"
                  aria-describedby="images"
                  //value={newHorseImages.url}
                  placeholder=""
                  onChange={addImage}
                  type="file"
                />
              </InputGroup>
              */}
            </div>
          </div>
        </div>
        <Button
          variant="primary"
          type="submit"
          disabled={newHorseName.length < 1}
        >
          Add
        </Button>{" "}
      </form>
    </div>
  );
};
