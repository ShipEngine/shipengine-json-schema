import { JSONSchema6 } from "json-schema";
/**
 * The index entry for a single ShipEngine API endpoint.
 */
export interface ShipEngineJsonSchemaIndexEntry {
    /**
     * The unique name of this API endpoint (e.g. "listLabels", "getLabel")
     */
    name: string;
    /**
     * The request schema, or null if the endpoint does not accept a request body
     */
    requestSchema: JSONSchema6 | null;
    /**
     * The response schema for each HTTP status code that this endpoint may return
     */
    responseSchemas: {
        /**
         * The schema for a specific HTTP status code
         */
        [key: string]: JSONSchema6;
    };
}
