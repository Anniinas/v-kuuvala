import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { ScanOutput } from "aws-sdk/clients/dynamodb";
import { AWSError } from "aws-sdk";

const AWS = require("aws-sdk");
AWS.config.update({ region: "eu-north-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

const handleCreateHorseRequest = async (event: APIGatewayProxyEvent) => {
  let requestBodyJson = "";
  {
    if (event.isBase64Encoded) {
      requestBodyJson = Buffer.from(event.body ?? "", "base64").toString(
        "utf8"
      );
    } else {
      requestBodyJson = event.body ?? "";
    }
  }

  const requestBodyObject = JSON.parse(requestBodyJson) as {
    id: string;
    name: string;
    breed: string;
    gender: string;
    dob: string;
    sire: string;
    dam: string;
    color: string;
    height: string;
    discpline: string;
    owner: string;
    breeder: string;
    breederName: string;
    location: string;
    regCode: string;
    createdDate: string;
    personality: string;
    images: { id: number; url: string };
  };

  await new Promise((resolve, reject) => {
    docClient.put(
      {
        TableName: "horses",
        Item: {
          id: requestBodyObject.id,
          name: requestBodyObject.name,
          breed: requestBodyObject.breed,
          gender: requestBodyObject.gender,
          dob: requestBodyObject.dob,
          sire: requestBodyObject.sire,
          dam: requestBodyObject.dam,
          color: requestBodyObject.color,
          height: requestBodyObject.height,
          discpline: requestBodyObject.discpline,
          owner: requestBodyObject.owner,
          breeder: requestBodyObject.breeder,
          breederName: requestBodyObject.breederName,
          location: requestBodyObject.location,
          regCode: requestBodyObject.regCode,
          personality: requestBodyObject.personality,
          createdDate: requestBodyObject.createdDate,
          images: requestBodyObject.images,
        },
      },
      (err: AWSError) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(null);
        }
      }
    );
  });

  return {
    statusCode: 201,
    headers: {
      "content-type": "appltext/plain",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: "Created.",
  };
};

const handleCreateNoteRequest = async (event: APIGatewayProxyEvent) => {
  let requestBodyJson = "";
  {
    if (event.isBase64Encoded) {
      requestBodyJson = Buffer.from(event.body ?? "", "base64").toString(
        "utf8"
      );
    } else {
      requestBodyJson = event.body ?? "";
    }
  }

  const requestBodyObject = JSON.parse(requestBodyJson) as {
    id: string;
    content: string;
    title: string;
  };

  await new Promise((resolve, reject) => {
    docClient.put(
      {
        TableName: "notes",
        Item: {
          id: requestBodyObject.id,
          content: requestBodyObject.content,
          title: requestBodyObject.title,
        },
      },
      (err: AWSError) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(null);
        }
      }
    );
  });

  return {
    statusCode: 201,
    headers: {
      "content-type": "text/plain",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: "Created.",
  };
};

const handleGetNotesRequest = async () => {
  const queryResult: ScanOutput = await new Promise((resolve, reject) => {
    docClient.scan(
      { TableName: "notes", Limit: 100 },
      (err: AWSError, data: ScanOutput) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: JSON.stringify(queryResult.Items),
  };
};

const handleGetHorsesRequest = async () => {
  const queryResult: ScanOutput = await new Promise((resolve, reject) => {
    docClient.scan(
      { TableName: "horses", Limit: 100 },
      (err: AWSError, data: ScanOutput) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: JSON.stringify(queryResult.Items),
  };
};

export const handler: APIGatewayProxyHandler = async (event) => {
  const routeKey = `${event.httpMethod} ${event.pathParameters?.proxy}`;

  if (routeKey === "GET notes/") {
    return handleGetNotesRequest();
  }

  if (routeKey === "POST notes/") {
    return handleCreateNoteRequest(event);
  }

  if (routeKey === "POST horses/") {
    return handleCreateHorseRequest(event);
  }

  if (routeKey === "GET horses/") {
    return handleGetHorsesRequest();
  }

  return {
    statusCode: 404,
    body: `No handler for routeKey ${routeKey}.`,
  };
};
