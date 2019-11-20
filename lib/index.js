"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_schema_index_1 = require("./resolve-schema-index");
exports.resolveSchemaIndex = resolve_schema_index_1.resolveSchemaIndex;
exports.default = resolve_schema_index_1.resolveSchemaIndex;
// CommonJS default export hack
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Object.assign(module.exports.default, module.exports); // tslint:disable-line: no-unsafe-any
}
//# sourceMappingURL=index.js.map