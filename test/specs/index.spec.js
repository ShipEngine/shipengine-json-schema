const index = require("../../index.json");
const { expect } = require("chai");
const fs = require("fs");

describe("The index for request/response schemas", () => {

  for (const [pathName, pathObj] of Object.entries(index)) {

    const supportedVerbs = ["get", "post", "put", "delete", "patch"];
    const expectedSchemaProperties = ["name", "requestSchema", "responseSchemas"];

    for (let verb of Object.keys(pathObj)) {

      it(`${pathName} should only contain valid httpVerbs`, () => {
        expect(verb).to.be.oneOf(supportedVerbs);
      });

      it(`${pathName} ${verb} should only contain expected schema properties`, () => {
        expect(pathObj[verb]).to.have.all.keys(expectedSchemaProperties);
      });

      if(pathObj[verb]["requestSchema"] !== null) {
        it(`${pathName} ${verb} requestSchema should point to an actual file`, () => {
          expect(fs.existsSync(`./${pathObj[verb]["requestSchema"]}`)).to.equal(true);
        });
      }

      for (let responseKey of Object.keys(pathObj[verb]["responseSchemas"])) {
        it(`${pathName} ${verb} ${responseKey} should point to a valid JSON file`, () => {
          expect(fs.existsSync(`./${pathObj[verb]["responseSchemas"][responseKey]}`)).to.equal(true);
        });
      }
    }
  }
});