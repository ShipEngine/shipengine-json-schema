import { JSONSchema6 } from "json-schema";
import { jsonIndex } from "./json-index";
import { readJSON } from "./read-json";
import { ShipEngineJsonSchemaIndexEntry } from "./shipengine-json-schema-entry";
import { ShipEngineJsonSchemaIndex } from "./shipengine-json-schema-index";

export = resolveSchemaIndex();

/**
 * Returns a copy of the JSON Schema index with the schema file paths replaced
 * with actual JSON Schema objects.
 */
function resolveSchemaIndex() {
  const nodeIndex: ShipEngineJsonSchemaIndex<JSONSchema6> = {};

  for (const url of Object.keys(jsonIndex)) {
    nodeIndex[url] = nodeIndex[url] || {};

    for (const method of Object.keys(jsonIndex[url])) {
      const jsonIndexEntry = jsonIndex[url][method];

      // Read the request schema, if there is one
      let requestSchema: JSONSchema6 | null = null;
      if (jsonIndexEntry.requestSchema) {
        requestSchema = readJSON<JSONSchema6>(jsonIndexEntry.requestSchema);
      }

      // Clone this JSON Schema index entry
      let nodeIndexEntry: ShipEngineJsonSchemaIndexEntry<JSONSchema6>;
      nodeIndexEntry = nodeIndex[url][method] = {
        name: jsonIndexEntry.name,
        requestSchema,
        responseSchemas: {},
      };

      // Read each response schema for this API endpoint
      for (const statusCode of Object.keys(jsonIndexEntry.responseSchemas)) {
        const responseSchema = readJSON<JSONSchema6>(jsonIndexEntry.responseSchemas[statusCode]);
        nodeIndexEntry.responseSchemas[statusCode] = responseSchema;
      }
    }
  }

  return nodeIndex;
}
