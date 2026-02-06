const { createLookupObject } = require("../db/seeds/seed-utils.js");

describe("createLookupObject", () => {
  test("return an object with a single key-value pair when passed an array containing a single object", () => {
    const input = [{ name: "Rose", age: 35 }];
    const expected = { Rose: 35 };
    expect(createLookupObject(input, "name", "age")).toEqual(expected);
  });
  test("returns an object with multiple key-value pairs when passed an array containing multiple objects", () => {
    const input = [
      { middleName: "danger", faveColour: "yellow", pet: "Tufty" },
      { middleName: "Stephen", faveColour: "purple", pet: "Peanut" },
      { middleName: "John", faveColour: "green", pet: "Ginger Cheeks" },
    ];
    const expected = {
      yellow: "Tufty",
      purple: "Peanut",
      green: "Ginger Cheeks",
    };
    expect(createLookupObject(input, "faveColour", "pet")).toEqual(expected);
  });
});
