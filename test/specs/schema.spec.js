const fs = require("fs");
const { expect } = require("chai");
const isJsonSchema = require("../helpers/is-json-schema");

const requestResults = fs.readdirSync("./requests/");
const responseResults = fs.readdirSync("./responses/");

describe("Json schema requests/responses:", () => {

  for(let requestFile of requestResults) {
    const fileContents = fs.readFileSync(`./requests/${requestFile}`);

    it(`${requestFile} should be valid json`, () => {
      expect(isJsonSchema(JSON.parse(fileContents.toString()))).to.not.throw;
    });
  }

  for(let responseFile of responseResults) {
    const fileContents = fs.readFileSync(`./responses/${responseFile}`);

    it(`${responseFile} should be valid json`, () => {
      expect(isJsonSchema(JSON.parse(fileContents.toString()))).to.not.throw;
    });
  }

});