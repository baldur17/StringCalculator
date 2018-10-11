const add = require("./calculator");

it("should return zero on an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return 4", () => {
  expect(add("4")).toBe(4);
});

it("should return 9", () => {
  expect(add("4,5")).toBe(9);
});

it("should return 6", () => {
  expect(add("1,2,3")).toBe(6);
});

it("should return 6", () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should throw negative error: -2', () => {
  expect(() => {
    add('1,-2,3');
  }).toThrow();
});

it("should return 2", () => {
  expect(add("1001,2")).toBe(2);
});
