import { readJSON } from "./read-json";
import { ShipEngineJsonSchemaIndex } from "./shipengine-json-schema-index";

export const jsonIndex = readJSON<ShipEngineJsonSchemaIndex<string>>("index.json");
