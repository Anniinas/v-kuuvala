import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { ServiceException } from "@smithy/smithy-client";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDB, ScanCommandOutput } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { rejects } from "assert";

const { randomUUID } = require('crypto')

const s3 = new S3({
  region: "eu-north-1",
});


const docClient = DynamoDBDocument.from(new DynamoDB());

const handleCreateHorseRequest = async (event: APIGatewayProxyEvent) => {
  let requestBodyJson = "";
  console.log("handleCreateHorseRequest");
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
    //id: string;
    name: string;
    breed: string;
    gender: string;
    dob: string;
    //sireId: string;
    //damId: string;
    pedigree: [];
    color: string;
    height: string;
    discpline: string;
    owner: string;
    ownerEmail: string;
    breeder: string;
    breederName: string;
    breederEmail: string;
    importerName: string;
    importerEmail: string;
    location: string;
    regCode: string;
    createdDate: string;
    personality: string;
    images: [];
    attributes: [];
  };

  await new Promise((resolve, reject) => {
    docClient.put(
      {
        TableName: "horses",
        Item: {
          id: randomUUID(),
          name: requestBodyObject.name,
          breed: requestBodyObject.breed,
          gender: requestBodyObject.gender,
          dob: requestBodyObject.dob,
          //sireId: requestBodyObject.sireId,
          //damId: requestBodyObject.damId,
          pedigree: requestBodyObject.pedigree,
          color: requestBodyObject.color,
          height: requestBodyObject.height,
          discpline: requestBodyObject.discpline,
          owner: requestBodyObject.owner,
          ownerEmail: requestBodyObject.ownerEmail,
          breeder: requestBodyObject.breeder,
          breederName: requestBodyObject.breederName,
          breederEmail: requestBodyObject.breederEmail,
          importerName: requestBodyObject.importerName,
          importerEmail: requestBodyObject.importerEmail,
          location: requestBodyObject.location,
          regCode: requestBodyObject.regCode,
          personality: requestBodyObject.personality,
          createdDate: requestBodyObject.createdDate,
          images: requestBodyObject.images,
          attributes: requestBodyObject.attributes,
        },
      },
      (err: ServiceException) => {
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
      "content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: "Created.",
  };
};

const handleGetHorsesRequest = async () => {
  const queryResult: ScanCommandOutput = await new Promise((resolve, reject) => {
    docClient.scan(
      { TableName: "horses", Limit: 100 },
      (err, data: any) => { // Consider using more generic types here or specific types based on AWS SDK documentation
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });

  console.info("EVENT\n handleGetHorsesRequest");

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

const handleGetHorseRequest = async (horseId: string) => {
  const queryResult: ScanCommandOutput = await new Promise((resolve, reject) => {
    docClient.get(
      { TableName: "horses", Key: { id: horseId } },
      (err: ServiceException, data: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(data.Item);
        }
      }
    );
  });

  console.log(queryResult);

  return {
    statusCode: 200,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
    },
    body: JSON.stringify(queryResult),
  };
};

export const handler: APIGatewayProxyHandler = async (event) => {
  const routeKey = `${event.httpMethod} ${event.pathParameters?.proxy}`;

  const horseId = event.queryStringParameters?.id;

  console.info("EVENT\n" + JSON.stringify(event, null, 2));

  //const horseId = event.headers.referer?.match(/(?<=horse\/)[0-9]+/)?.[0];
  //console.log(horseId);

  /*
  if (routeKey === "GET notes/") {
    return handleGetNotesRequest();
  } 

  if (routeKey === "POST notes/") {
    return handleCreateNoteRequest(event);
  }*/

  if (routeKey === "POST horse/add/") {
    return handleCreateHorseRequest(event);
  }

  if (routeKey === "GET horses/") {
    return handleGetHorsesRequest();
  }

  console.log(event.queryStringParameters?.id);
  console.log(routeKey);

  if (routeKey === "GET horse") {
    if (horseId) {
      return handleGetHorseRequest(horseId);
    }
    return handleGetHorseRequest("0");
  }

  return {
    statusCode: 404,
    body: `No handler for routeKey ${routeKey}.`,
  };
};
