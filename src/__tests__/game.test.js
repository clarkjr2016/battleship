import { Ship } from "../functionality/ship";

it("Seeing if hit method adds 1", () => {
  const test = new Ship(5);

  expect(test.hit()).toBe(1);
});

it("Seeing if the getLength function returns the initialized length", () => {
  const test = new Ship(5);

  expect(test.getLength()).toBe(5);
});

it("Seeing if the sunk function will return false if length is higher than hits", () => {
  const test = new Ship(2);

  test.hit(); //adding one to the hit property

  expect(test.isSunk()).toBe(false);
});

it("Seeing if the sunk function will return true if length is equal to the hits", () => {
  const test = new Ship(2);

  test.hit(); //adding one to the hit property
  test.hit(); //adding one more to the property to equal 2

  expect(test.isSunk()).toBe(true);
});
