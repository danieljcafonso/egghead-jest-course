const sum = require("./index");
jest.mock("./index");

describe("sum", () => {
  test("the sum of 2 + 1 should return 3", () => {
    // arrange
    sum.mockImplementation(() => 3);
    const a = 2;
    const b = 1;
    const expectedResult = 3;
    // act
    const result = sum(a, b);
    // assert
    expect(result).toBe(expectedResult);
    console.log(sum);
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(a, b);
  });

  test("expect callback to be called", () => {
    const fn = (cb) => cb("text");
    const mockedCallback = jest.fn();
    fn(mockedCallback);

    expect(mockedCallback).toHaveBeenCalledTimes(1);
    expect(mockedCallback).toHaveBeenCalledWith("text");
  });
});
