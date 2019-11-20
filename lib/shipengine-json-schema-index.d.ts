import { ShipEngineJsonSchemaIndexEntry } from "./shipengine-json-schema-entry";
/**
 * A mapping of ShipEngine API endpoints to the corresponding request and response schemas
 */
export interface ShipEngineJsonSchemaIndex<T> {
    /**
     * The URL of the API endpoint (e.g. "/v1/labels/{label_id}")
     */
    [url: string]: {
        /**
         * The HTTP method of the API endpoint (e.g. "get", "put", "post")
         */
        [method: string]: ShipEngineJsonSchemaIndexEntry<T>;
    };
}
