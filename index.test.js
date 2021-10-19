const index = require("./index");

describe("sum", () => {
  test("the sum of 2 + 1 should return 3", () => {
    // arrange
    const spy = jest.spyOn(index, "sum");
    const a = 2;
    const b = 1;
    const expectedResult = 3;
    // act
    const result = index.sum(a, b);
    // assert
    expect(result).toBe(expectedResult);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(a, b);
  });
});
