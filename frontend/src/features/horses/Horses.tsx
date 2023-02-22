import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { createHorse, fetchHorses } from "./horsesSlice";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import ReactS3Client from "react-aws-s3-typescript";

const S3_BUCKET = "anniina-react-spa-frontend";
const REGION = "eu-north-1";

const s3Config = {
  bucketName: S3_BUCKET,
  dirName: "images/horses/" /* Optional */,
  region: REGION,
  accessKeyId: "",
  secretAccessKey: "",
};

const addImage = async (e: any) => {
  console.log(e.target.files[0]);
  //setNewHorseImages(e.target.files[0]);

  const s3 = new ReactS3Client(s3Config);

  try {
    const res = await s3.uploadFile(e.target.files[0]);

    console.log(res);
  } catch (exception) {
    console.log(exception);
  }
};

export const Horses = () => {
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
      <h1>Add horse</h1>
      <form
        onSubmit={(e) => {
          /*
          const params = {
            ACL: "public-read",
            Body: newHorseImages,
            Bucket: S3_BUCKET,
            Key: newHorseImages.name,
          };

          myBucket
            .putObject(params)
            .on("httpUploadProgress", (evt) => {
              setProgress(Math.round((evt.loaded / evt.total) * 100));
            })
            .send((err) => {
              if (err) console.log(err);
            }); */

          reduxDispatch(
            createHorse({
              breed: newHorseBreed,
              name: newHorseName,
              gender: newHorseGender,
              dob: newHorseDOB,
              sire: newHorseSire,
              dam: newHorseDam,
              color: newHorseColor,
              height: newHorseHeight,
              discpline: newHorseDiscpline,
              owner: newHorseOwner,
              breeder: newHorseBreeder,
              breederName: newHorseBreederName,
              location: newHorseLocation,
              regCode: newHorseRegCode,
              personality: newHorsePersonality,
              createdDate: newHorseCreatedDate,
              images: newHorseImages,
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
              <Form.Label htmlFor="create-server-reg-code">
                Reg. code
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  id="reg-code"
                  aria-describedby="reg-code"
                  value={newHorseRegCode}
                  placeholder=""
                  onChange={(e) => setNewHorseRegCode(newHorseRegCode)}
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
            <tr>
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
