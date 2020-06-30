function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  forest = new Forest();
  forest.setup();
  mainScreen = new MainScreen();
  // somDoJogo.loop();
  scenes = {
    forest,
    mainScreen,
  }
  startButton = new StartButton('Iniciar', [width/2, height/2]);
}

function keyPressed() {
  forest.keysPressed(key);
}

function draw() {
  scenes[activeScene].draw();
}
