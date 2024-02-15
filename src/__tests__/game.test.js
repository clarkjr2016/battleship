import { Ship } from "../functionality/ship";
import { Gameboard } from "../functionality/gameboard";

it("Seeing if hit method adds 1", () => {
  const test = new Ship(5);

  expect(test.hit()).toBe(1);
});

it("Seeing if the getLength function returns the initialized length", () => {
  const test = new Ship(5);

  expect(test.getLength()).toBe(5);
});

it("Seeing if the sunk function will return false if length is higher than hits", () => {
  const test = new Ship(2); // initializing a new Ship class with a length of two.

  test.hit(); //adding one to the hit property

  expect(test.isSunk()).toBe(false);
});

it("Seeing if the sunk function will return true if length is equal to the hits", () => {
  const test = new Ship(2);

  test.hit(); //adding one to the hit property
  test.hit(); //adding one more to the property to equal 2

  expect(test.isSunk()).toBe(true);
});

it("Grid is populating 10 x 10 on the gameboard", () => {
  const gameboard = new Gameboard();
  expect(gameboard.createGrid()).toBeInstanceOf(Array); // I actually want to check what is being returned from the createGrid method.
  expect(gameboard.createGrid()).toHaveLength(10); // I want to check if the grid is 10 x 10
});
