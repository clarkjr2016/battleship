export class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0; // hits will always start off with 0
    this.sunk = false; // ships will always start off with a false sunk status
  }

  getLength() {
    return this.length;
  }

  hit(n = 1) {
    return (this.hits += n); // increases this objects hit count by 1;
  }

  getHits() {
    return this.hits;
  }

  isSunk() {
    if (this.getLength() <= this.getHits()) {
      return (this.sunk = true);
    } else {
      return this.sunk;
    }
  }
}
