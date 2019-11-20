const fs = require("fs");
const { expect } = require("chai");

const requestResults = fs.readdirSync("./requests/");
const responseResults = fs.readdirSync("./responses/");

const AJV = require("ajv");

describe("Json schema requests/responses:", () => {

  for(let requestFile of requestResults) {
    const fileContents = fs.readFileSync(`./requests/${requestFile}`);

    it(`${requestFile} should be valid json`, () => {

      const jsonSchemaValidator = new AJV({
        schemaId: 'id',
        unknownFormats: "ignore",
        logger: false,
        strictKeywords: true
      });

      // jsonSchemaValidator.addFormat("double", "[0-9]+[.[0-9]+]?");
      // json validate
      expect(jsonSchemaValidator.compile(JSON.parse(fileContents.toString()))).to.not.throw;
    });
  }

  for(let responseFile of responseResults) {
    const fileContents = fs.readFileSync(`./responses/${responseFile}`);

    it(`${responseFile} should be valid json`, () => {

      const jsonSchemaValidator = new AJV({
        schemaId: 'id',
        unknownFormats: "ignore",
        logger: false
      });

      // jsonSchemaValidator.addFormat("double", "[0-9]+[.[0-9]+]?");
      // json validate
      expect(jsonSchemaValidator.compile(JSON.parse(fileContents.toString()))).to.not.throw;
    });
  }

});