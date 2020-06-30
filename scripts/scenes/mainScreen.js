class MainScreen {
  constructor() {}
  draw() {
    this._backgroundImage();
    this._texts();
    this._startButton();
  }
  _backgroundImage() {
    image(images.backgrounds.mainScreen, 0, 0, width, height);
  }
  _texts() {
    textFont(fonts.eater);
    textAlign(CENTER)
    fill('#fff');
    textSize(50);
    text('Patrício', width/2, 120);
    textSize(30);
    text('e a floresta assombrada', width / 2, 160);
  }
  _startButton() {
    startButton.draw();
  }
}