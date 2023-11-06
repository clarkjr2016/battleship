export class Ship {
  constructor(length, hits, sunk) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }

  getLength() {
    return this.length;
  }

  hit() {
    return this.hits + 1; // increases this objects hit count by 1;
  }
}
