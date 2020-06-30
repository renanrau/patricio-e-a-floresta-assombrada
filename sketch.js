function setup() {
  createCanvas(windowWidth > 1280 ? 1280 : windowWidth, windowHeight > 720 ? 720 : windowHeight);
  frameRate(30);
  forest = new Forest();
  forest.setup();
  mainScreen = new MainScreen();
  sounds.forest.amp(0.1);
  sounds.forest.loop();
  scenes = {
    forest,
    mainScreen,
  }
  startButton = new StartButton('Iniciar', [width, height/2]);
}

function keyPressed() {
  forest.keysPressed(key);
}

function draw() {
  scenes[activeScene].draw();
}
