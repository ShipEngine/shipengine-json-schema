![JSON Schema Logo](img/json-schema-logo.png) ShipEngine™ JSON Schemas
==============================================

This repo contains [JSON Schemas](https://json-schema.org/) for the [ShipEngine API](https://shipengine.com).  You can use these schemas with any of countless [JSON Schema tools](https://json-schema.org/implementations.html) to perform validation, generate models, etc.


File Structure
-----------------------------------

|Path                     |Description
|:------------------------|:--------------------------------
|[`requests`](requests)   |This directory contains separate JSON Schema files for every ShipEngine API request body.  Each file is fully-dereferenced (doesn't contain any [`$ref` pointers](https://json-schema.org/latest/json-schema-core.html#rfc.section.8.3)), so it should work with any tool or library.
|[`responses`](responses) |This directory contains separate JSON Schema files for every ShipEngine API response body.  Each file is fully-dereferenced (doesn't contain any [`$ref` pointers](https://json-schema.org/latest/json-schema-core.html#rfc.section.8.3)), so it should work with any tool or library.


Other API Definition Formats
-----------------------------------

### ![OpenAPI Logo](img/openapi-logo.png) OpenAPI
[OpenAPI 3.0](https://github.com/OAI/OpenAPI-Specification) is an API specification format that's supported by many [API tools and libraries](https://openapi.tools/).

### ![Postman Logo](img/postman-logo.png) Postman
An official ShipEngine [Postman](https://getpostman.com) collection is **coming soon!**
