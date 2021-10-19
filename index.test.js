const sum = require("./index");

describe("sum", () => {
  test("the sum of 2 + 1 should return 3", () => {
    // arrange
    const a = 2;
    const b = 1;
    const expectedResult = 3;
    // act
    const result = sum(a, b);
    // assert
    expect(result).toBe(expectedResult);
  });
});
