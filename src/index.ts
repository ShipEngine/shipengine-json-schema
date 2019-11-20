import { resolveSchemaIndex } from "./resolve-schema-index";

export { resolveSchemaIndex };

export default resolveSchemaIndex;

// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
  module.exports = Object.assign(module.exports.default, module.exports);  // tslint:disable-line: no-unsafe-any
}
