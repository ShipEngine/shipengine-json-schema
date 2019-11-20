"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_index_1 = require("./json-index");
const read_json_1 = require("./read-json");
/**
 * Returns a copy of the JSON Schema index with the schema file paths replaced
 * with actual JSON Schema objects.
 */
function resolveSchemaIndex() {
    const nodeIndex = {};
    for (const url of Object.keys(json_index_1.jsonIndex)) {
        nodeIndex[url] = nodeIndex[url] || {};
        for (const method of Object.keys(json_index_1.jsonIndex[url])) {
            const jsonIndexEntry = json_index_1.jsonIndex[url][method];
            // Read the request schema, if there is one
            let requestSchema = null;
            if (jsonIndexEntry.requestSchema) {
                requestSchema = read_json_1.readJSON(jsonIndexEntry.requestSchema);
            }
            // Clone this JSON Schema index entry
            let nodeIndexEntry;
            nodeIndexEntry = nodeIndex[url][method] = {
                name: jsonIndexEntry.name,
                requestSchema,
                responseSchemas: {},
            };
            // Read each response schema for this API endpoint
            for (const statusCode of Object.keys(jsonIndexEntry.responseSchemas)) {
                const responseSchema = read_json_1.readJSON(jsonIndexEntry.responseSchemas[statusCode]);
                nodeIndexEntry.responseSchemas[statusCode] = responseSchema;
            }
        }
    }
    return nodeIndex;
}
exports.resolveSchemaIndex = resolveSchemaIndex;
//# sourceMappingURL=resolve-schema-index.js.map