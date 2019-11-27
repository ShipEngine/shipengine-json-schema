const fs = require("fs");
const { expect } = require("chai");
const isJsonSchema = require("../helpers/is-json-schema");
const { findAllKeys, doesSchemaPropertyExist, findAndTestSchemaProperty} = require("../helpers/utils");

const requestResults = fs.readdirSync("./requests/");
const responseResults = fs.readdirSync("./responses/");

describe("Json Schema Requests/Responses:", () => {

  for(let requestFile of requestResults) {
    const fileContents = fs.readFileSync(`./requests/${requestFile}`);
    const fileJson = JSON.parse(fileContents.toString());

    it(`${requestFile} should be valid json`, () => {
      expect(isJsonSchema(fileJson)).to.not.throw;
    });

    it(`${requestFile} should not contain any non-compatible JSON schema properties`, () => {
      const triggers = ["example", "readOnly", "writeOnly", "nullable", "discriminator",
      "xml", "externalDocs", "deprecated"];
      
      const allSchemaKeys = findAllKeys(fileJson);

      for(let schemaKey of allSchemaKeys) {
        expect(schemaKey).to.not.be.oneOf(triggers);
      }
    });
    
    let testRequestFiles = [
      {
        fileName: "create_shipments_request_body.json",
        propertiesToCheck: ["shipment_id", "created_at"],
        removedFromRequired: ["shipment_id"]
      },
      {
        fileName: "create_label_request_body",
        propertiesToCheck: ["label_id", "status", "shipment_id"],
        removedFromRequired: ["label_id", "status", "shipment_id"]
      }];

    // Check that the properties do not exist in the schema or the required field
    for (let requestFileToTest of testRequestFiles) {

      if(requestFileToTest.fileName === requestFile) {

        for(let propertyToCheck of requestFileToTest.propertiesToCheck) {
          it(`should not contain ${propertyToCheck} in the request schema`, () => {
            expect(doesSchemaPropertyExist(fileJson, propertyToCheck)).to.equal(false);
          });
          
          it(`should not contain ${propertyToCheck} in the required property`, () => {

            const testFunc = (requiredArray, propertyToCheck) => {
              return !requiredArray.includes(propertyToCheck);
            }

            expect(findAndTestSchemaProperty(fileJson, "required", requestFileToTest.removedFromRequired, testFunc)).to.equal(true);
          });
        }
      }
    }
  }

  for(let responseFile of responseResults) {
    const fileContents = fs.readFileSync(`./responses/${responseFile}`);
    const fileJson = JSON.parse(fileContents.toString());


    let testResponseFiles = [
      {
        fileName: "create_label_response_body.json",
        propertiesToCheck: ["shipment", "validate_address", "test_label", "label_download_type"],
        removedFromRequired: ["shipment"]
      }
    ]; 

    it(`${responseFile} should be valid json`, () => {
      expect(isJsonSchema(fileJson)).to.not.throw;
    });

    it(`${responseFile} should not contain any non-compatible JSON schema properties`, () => {
   
      const triggers = ["example", "readOnly", "writeOnly", "nullable", "discriminator",
      "xml", "externalDocs", "deprecated"];
      
      const allSchemaKeys = findAllKeys(fileJson);

      for(let schemaKey of allSchemaKeys) {
        expect(schemaKey).to.not.be.oneOf(triggers);
      }
    });

    for (let responseFileToTest of testResponseFiles) {

      if(responseFileToTest.fileName === responseFile) {

        for(let propertyToCheck of responseFileToTest.propertiesToCheck) {
          it(`${responseFile} should not contain ${propertyToCheck} in the response schema`, () => {
            expect(doesSchemaPropertyExist(fileJson, propertyToCheck)).to.equal(false);
          });
          
          it(`${responseFile} should not contain ${propertyToCheck} in the required property`, () => {

            const testFunc = (requiredArray, propertyToCheck) => {
              return !requiredArray.includes(propertyToCheck);
            }

            expect(findAndTestSchemaProperty(fileJson, "required", responseFileToTest.removedFromRequired, testFunc)).to.equal(true);
          });
        }
      }
    }
  }

});
