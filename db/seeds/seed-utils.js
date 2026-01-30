const articles = require("../data/test-data/articles");

function createLookupObject(arrayOfObjects, newObjKey, newObjValue) {
  const lookupObj = {};
  for (let i = 0; i < arrayOfObjects.length; i++) {
    const keyToAdd = arrayOfObjects[i][newObjKey];
    const valueToAdd = arrayOfObjects[i][newObjValue];
    lookupObj[keyToAdd] = valueToAdd;
  }
  console.log(lookupObj);
  return lookupObj;
}

createLookupObject(articles, "title", "topic");

module.exports = { createLookupObject };
