"use strict";

const commonJSExport = require("../../");
// const { default: defaultExport, resolveSchemaIndex: namedExport } = require("../../");
const { expect } = require("chai");

describe("Package exports", () => {

  it("should export the resolveSchemaIndex() object as the default CommonJS export", () => {
    expect(commonJSExport).to.be.a("object");
  });
});
