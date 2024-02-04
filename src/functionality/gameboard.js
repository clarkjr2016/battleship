export class Gameboard {
  constructor() {
    this.createGrid = () => {
      let board = [];

      for (let i = 0; i < 10; i++) {
        board[i] = [i]; // creates the rows with the iteration that it is on
        for (let j = 0; j < 10; j++) {
          board[i].push(i);
        }
      }

      return board;
    };
  }
}
