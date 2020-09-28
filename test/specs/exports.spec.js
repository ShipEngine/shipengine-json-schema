"use strict";

const commonJSExport = require("../../");
const { expect } = require("chai");

describe("Package exports", () => {

  it("should export the resolveSchemaIndex() object as the default CommonJS export", () => {
    expect(commonJSExport).to.be.a("object");
  });

  for (let [path, content] of Object.entries(commonJSExport)) {
    for (let [verb, verbContents] of Object.entries(content)) {
      
      const allowedVerbs = ["post", "get", "delete", "put", "patch"];
      
      if(allowedVerbs.includes(verb)) {
        if(verbContents.requestSchema) {
          it(`${path}: ${verb} should point to an object and not a path file`, () => {
            expect(verbContents.requestSchema).to.include.all.keys(["$id", "title"]);
          })
        }

        it(`${path}: ${verb} should contain success and error status codes`, () => {

          for(let [statusCode, statusContent] of Object.entries(verbContents.responseSchemas)) {

            expect(statusCode).to.contain.oneOf(["200", "204", "207", "400", "404", "409", "500"]);
            expect(statusContent).to.be.a("object");
          }
        });
      }
    }
  }
});
