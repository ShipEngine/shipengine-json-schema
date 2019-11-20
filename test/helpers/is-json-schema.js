"use strict";

const expect = require("chai").expect;
const AJV = require("ajv");

const jsonSchemaValidator = new AJV({
  unknownFormats: "ignore",
  logger: false,
});

module.exports = function isJsonSchema(schema) {
  const message = `The ${schema.$id} schema is invalid`;

  // The id must be snake_case
  expect(schema.$id).to.match(/^[a-z]+(_[a-z]+)*$/, message);

  // The title and id should match
  expect(schema.title).to.equal(schema.$id, message);

  // Validate the JSON Schema
  try {
    jsonSchemaValidator.compile(schema);
  }
  catch (error) {
    throw new Error(message + ": " + error.message);
  }

  // If we get here, then it's a valid JSON Schema
  return true;
}
