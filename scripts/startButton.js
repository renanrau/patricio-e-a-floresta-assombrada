class StartButton {
  constructor(text, position) {
    this.text = text;
    this.x = position[0];
    this.y = position[1];
    this.button = createButton(this.text);
    this.button.addClass('button-start');
    this.button.mousePressed(() => this._changeScene());
  }
  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  _changeScene() {
    this.button.remove();
    activeScene = 'forest';
  }
}