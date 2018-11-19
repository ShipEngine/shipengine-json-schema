![JSON Schema Logo](https://shipengine.github.io/img/json-schema-logo.png) ShipEngine™ JSON Schemas
==============================================

This repo contains [JSON Schemas](https://json-schema.org/) for the [ShipEngine API](https://shipengine.com).  You can use these schemas with any of countless [JSON Schema tools](https://json-schema.org/implementations.html) to perform validation, generate models, etc.


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
The official ShipEngine [OpenAPI 3.0 definitions](https://github.com/shipengine/OpenAPI).  The OpenAPI format is supported by many [tools and libraries](https://openapi.tools/) for every major technology stack.

### ![Postman Logo](https://shipengine.github.io/img/postman-logo-small.png) Postman
An official ShipEngine [Postman](https://getpostman.com) collection is **coming soon!**
