![JSON Schema Logo](https://shipengine.github.io/img/json-schema-logo.png) ShipEngine™ JSON Schemas
==============================================

This repo contains the official [JSON Schemas](https://json-schema.org/) for the [ShipEngine API](https://shipengine.com).  You can use these schemas with any of countless [JSON Schema tools](https://json-schema.org/implementations.html) to perform validation, generate models, etc.

Usage in Node.js
-----------------------------------
To use in Node.js, just `require()` or `import` this repo's directory.  The imported object has the same structure as [`index.json`](index.json), except that the `requestSchema` and `responseSchemas` are actual JSON Schema objecs, rather than just file paths.  You can use these schemas with a JSON Schema validator, such as [AJV](https://www.npmjs.com/package/ajv).

```javascript
const shipengine = require("shipengine-json-schema");
const AJV = require("ajv");

// Initialize AJV, ignoring our custom formats
let ajv = new AJV({ unknownFormats: "ignore" });

// Get the JSON Schema for a specific API endpoint
let schema = shipengine["/v1/labels/shipment/{shipment_id}"].post.requestSchema;

// Validate an API request body against the schema
let isValid = ajv.validate(schema, {
  validate_address: "validate_and_clean",
  label_layout: "4x6",
  label_format: "pdf",
});
```


File Structure
-----------------------------------

|Path                       |Description
|:--------------------------|:--------------------------------
|[`index.json`](index.json) |This file is a JSON map of the request and response schemas for each API endpoint.
|[`requests`](requests)     |This directory contains separate JSON Schema files for every ShipEngine API request body.  Each file is fully-dereferenced (doesn't contain any [`$ref` pointers](https://json-schema.org/latest/json-schema-core.html#rfc.section.8.3)), so it should work with any tool or library.
|[`responses`](responses)   |This directory contains separate JSON Schema files for every ShipEngine API response body.  Each file is fully-dereferenced (doesn't contain any [`$ref` pointers](https://json-schema.org/latest/json-schema-core.html#rfc.section.8.3)), so it should work with any tool or library.


Other API Definition Formats
-----------------------------------

### ![OpenAPI Logo](https://shipengine.github.io/img/openapi-logo-small.png) OpenAPI
The official ShipEngine [OpenAPI 3.0 definitions](https://github.com/ShipEngine/shipengine-openapi).  The OpenAPI format is supported by many [tools and libraries](https://openapi.tools/) for every major technology stack.

### ![Postman Logo](https://shipengine.github.io/img/postman-logo-small.png) Postman
The official [Postman reference collection](https://documenter.getpostman.com/view/305204/SW7W5V6o) for ShipEngine.  Just import it into [Postman](https://getpostman.com) and immediately begin interacting with the ShipEngine API. 


New to ShipEngine? Download our [walkthrough collection instead](https://documenter.getpostman.com/view/305204/SW7XbA6V).

### ![Redoc Logo](https://shipengine.github.io/img/redoc-logo-small.png)
View the ShipEngine API definition [online in your browser](https://shipengine.github.io/shipengine-openapi/). This web page is generated from the [OpenAPI definition](https://github.com/ShipEngine/shipengine-openapi) using [ReDoc](https://github.com/Redocly/redoc).
