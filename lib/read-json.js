"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
/**
 * Synchronously reads the specified JSON file. This is just a wrapper around `require()`,
 * except that the file path is resolved relative to the root directory of this package.
 */
function readJSON(filePath) {
    // Resolve the file path, relative to the parent directory
    filePath = path.resolve(__dirname, "..", filePath);
    return require(filePath);
}
exports.readJSON = readJSON;
//# sourceMappingURL=read-json.js.map