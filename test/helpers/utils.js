const findAllKeys = (obj) => {
  let flattened = [];

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      flattened.push(key);
      if(!obj[key].every((value) => typeof(value) === "string" || typeof(value) === "number")) {
        for (let item of obj[key]) {
          flattened = flattened.concat(findAllKeys(item)); 
        }
      }
    }
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattened.push(key);
      flattened = flattened.concat(findAllKeys(obj[key]));

    } 
    else {
      flattened.push(key);
    }
  })
  return flattened
}

const doesSchemaPropertyExist = (obj, propertyToFind) => {
  let propertyFound = false;

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {

      if(key === propertyToFind) {
        propertyFound = true;
      }

      if(!obj[key].every((value) => typeof(value) === "string" || typeof(value) === "number")) {
        for (let item of obj[key]) {
          propertyFound = propertyFound || doesSchemaPropertyExist(item, propertyToFind); 
        }
      }
    }
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      if(key === propertyToFind) {
        propertyFound = true;
      }
      else {
        propertyFound = propertyFound || doesSchemaPropertyExist(obj[key], propertyToFind);
      }
    } 
    else {
      if(key === propertyToFind) {
        propertyFound = true;
      }
    }
  })

  return propertyFound;
}

const findAndTestSchemaProperty = (obj, propertyToFind, propertyToCheck, testFunc) => {
  let results = false;

  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {

      if(key === propertyToFind) {
        results = testFunc(obj[key], propertyToCheck);
      }

      if(!obj[key].every((value) => typeof(value) === "string" || typeof(value) === "number")) {
        for (let item of obj[key]) {
          results = results || findAndTestSchemaProperty(item, propertyToFind, propertyToCheck, testFunc); 
        }
      }
    }
    else if (typeof obj[key] === 'object' && obj[key] !== null) {
      if(key === propertyToFind) {
        results = testFunc(obj[key], propertyToCheck);
      }
      else {
        results = results || findAndTestSchemaProperty(obj[key], propertyToFind, propertyToCheck, testFunc);
      }
    } 
    else {
      if(key === propertyToFind) {
        results = testFunc(obj[key], propertyToCheck);
      }
    }
  })

  return results;
}


module.exports = {
  findAllKeys,
  doesSchemaPropertyExist,
  findAndTestSchemaProperty
}