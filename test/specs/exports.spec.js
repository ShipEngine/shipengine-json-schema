"use strict";

const expect = require("chai").expect;
const shipengineJsonSchemas = require("../../");

describe("Package exports", () => {

  it("should export the index object", () => {
    expect(shipengineJsonSchemas).to.be.an("object");
  });

  it("should retrieve a path object with the expected properties", () => {
    const schema = shipengineJsonSchemas["/v1/addresses/recognize"].put;
    const expectedSchemaProperties = ["name", "requestSchema", "responseSchemas"];

    expect(schema).to.have.all.keys(expectedSchemaProperties);
  }); 


});
