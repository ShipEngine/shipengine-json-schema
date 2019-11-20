import { JSONSchema6 } from "json-schema";
import { jsonIndex } from "./json-index";
import { readJSON } from "./read-json";
import { ShipEngineJsonSchemaIndexEntry } from "./shipengine-json-schema-entry";
import { ShipEngineJsonSchemaIndex } from "./shipengine-json-schema-index";

/**
 * Returns a copy of the JSON Schema index with the schema file paths replaced
 * with actual JSON Schema objects.
 */
export function resolveSchemaIndex() {
  const nodeIndex: ShipEngineJsonSchemaIndex = {};

  for (const url of Object.keys(jsonIndex)) {
    nodeIndex[url] = nodeIndex[url] || {};

    for (const method of Object.keys(jsonIndex[url])) {
      const jsonIndexEntry = jsonIndex[url][method];

      // Read the request schema, if there is one
      let requestSchema: JSONSchema6 | null = null;
      if (jsonIndexEntry.requestSchema) {
        requestSchema = readJSON<JSONSchema6>(jsonIndexEntry.requestSchema as string);
      }

      // Clone this JSON Schema index entry
      let nodeIndexEntry: ShipEngineJsonSchemaIndexEntry;
      nodeIndexEntry = nodeIndex[url][method] = {
        name: jsonIndexEntry.name,
        requestSchema,
        responseSchemas: {},
      };

      // Read each response schema for this API endpoint
      for (const statusCode of Object.keys(jsonIndexEntry.responseSchemas)) {
        const responseSchema = readJSON<JSONSchema6>(jsonIndexEntry.responseSchemas[statusCode] as string);
        nodeIndexEntry.responseSchemas[statusCode] = responseSchema;
      }
    }
  }

  return nodeIndex;
}
