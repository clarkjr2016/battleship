import { Ship } from "../functionality/ship";

it("Seeing if hit method adds 1", () => {
  const test = new Ship(5, 0, false);

  expect(test.hit()).toBe(1);
});

it("Seeing if the getLength function returns the initialized length", () => {
  const test = new Ship(5, 0, false);
  expect(test.getLength()).toBe(5);
});
