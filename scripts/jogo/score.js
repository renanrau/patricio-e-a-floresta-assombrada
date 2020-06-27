class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign('right');
    // fill('#fff');
    textSize(50);
    text(this.score, width - 50, 50);
  }

  addPoint() {
    this.score++;
  }
}