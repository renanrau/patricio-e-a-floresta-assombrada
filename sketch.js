

let backgrounds;
let lastBackgrounds;

let somDoJogo;
let somDoPulo;
let personagem;
let inimigo;
let inimigo2;
let images;

let score;

const CHARACTERS = {
  ANCIENT_BOAR: {
    size_w: 155*1.5,
    size_h: 119*1.5,
    sprite_w: 155,
    sprite_h: 119,
    coords: [
      [0, 0],
      [157, 0],
      [313, 0],
      [473, 0],
      [633, 0],
    ],
  },
  BLACK_KNIGHT: {
    size_w: 96,
    size_h: 100,
    sprite_w: 96,
    sprite_h: 100,
    coords: [
      [0, 0],
      [98, 0],
      [205, 0],
      [309, 0],
      [406, 0],
      [510, 0],
    ],
  },
  DARK_STUMP: {
    size_w: 68,
    size_h: 61,
    sprite_w: 68,
    sprite_h: 61,
    coords: [
      [0, 0],
      [73, 0],
      [154, 0],
      [230, 0],
    ],
  },
  PIG: {
    size_w: 90,
    size_h: 80,
    sprite_w: 90,
    sprite_h: 80,
    coords: [
      [0, 0],
      [86, 0],
      [174, 0],
      [262, 0],
    ],
  },
  POISON_LORD_TREE: {
    size_w: 101,
    size_h: 140,
    sprite_w: 101,
    sprite_h: 140,
    coords: [
      [0, 0],
      [99, 0],
      [197, 0],
      [295, 0],
      [388, 0],
      [484, 0],
    ],
  },
  POISONED_STONE_BUG: {
    size_w: 133*1.3,
    size_h: 101*1.3,
    sprite_w: 133,
    sprite_h: 101,
    coords: [
      [0, 0],
      [128, 0],
      [258, 0],
      [388, 0],
      [525, 0],
    ],
  },
  SKELEDOG: {
    size_w: 78,
    size_h: 73,
    sprite_w: 78,
    sprite_h: 73,
    coords: [
      [6, 0],
      [92, 0],
      [173, 0],
      [248, 0],
      [322, 0],
    ],
  },
  WOODEN_MASK: {
    size_w: 92*1.3,
    size_h: 96*1.3,
    sprite_w: 92,
    sprite_h: 96,
    coords: [
      [2, 0],
      [99, 0],
      [195, 0],
      [289, 0],
      [486, 0],
    ],
  },
};

function preload() {
  // faz o preload de todas as imagens usadas para o objeto 'images'
  images = {
    backgrounds: {
      forest: [
        loadImage("imagens/cenario/forest/10_Sky.png"),
        loadImage("imagens/cenario/forest/09_Forest.png"),
        loadImage("imagens/cenario/forest/08_Forest.png"),
        loadImage("imagens/cenario/forest/07_Forest.png"),
        loadImage("imagens/cenario/forest/06_Forest.png"),
        loadImage("imagens/cenario/forest/05_Particles.png"),
        loadImage("imagens/cenario/forest/04_Forest.png"),
        loadImage("imagens/cenario/forest/03_Particles.png"),
        loadImage("imagens/cenario/forest/02_Bushes.png"),
        loadImage("imagens/cenario/forest/01_Mist.png"),
      ],
    },
    characters: {
      ancient_boar: loadImage("imagens/characters/ancient_boar.png"),
      black_knight: loadImage("imagens/characters/black_knight.png"),
      dark_stump: loadImage("imagens/characters/dark_stump.png"),
      pig: loadImage("imagens/characters/pig.png"),
      poison_lord_tree: loadImage("imagens/characters/poison_lord_tree.png"),
      poisoned_stone_bug: loadImage("imagens/characters/poisoned_stone_bug.png"),
      skeledog: loadImage("imagens/characters/skeledog.png"),
      wooden_mask: loadImage("imagens/characters/wooden_mask.png"),
    },
  };
  backgrounds = [];
  lastBackgrounds = [];
  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/jump3.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  const lastIndex = images.backgrounds.forest.length - 2;
  images.backgrounds.forest.map((e, i) => {
    if (i >= lastIndex) {
      lastBackgrounds.push(new Cenario(e, i * 0.6));
    } else {
      backgrounds.push(new Cenario(e, i * 0.6));
    }
  });
  score = new Score();
  personagem = new Personagem(
    CHARACTERS.PIG.coords,
    images.characters.pig,
    50,
    45,
    CHARACTERS.PIG.size_w,
    CHARACTERS.PIG.size_h,
    CHARACTERS.PIG.sprite_w,
    CHARACTERS.PIG.sprite_h,
  );
  inimigo = new Inimigo(
    CHARACTERS.POISON_LORD_TREE.coords,
    images.characters.poison_lord_tree,
    50,
    45,
    CHARACTERS.POISON_LORD_TREE.size_w,
    CHARACTERS.POISON_LORD_TREE.size_h,
    CHARACTERS.POISON_LORD_TREE.sprite_w,
    CHARACTERS.POISON_LORD_TREE.sprite_h,
    15,
    500
  );
  inimigo2 = new Inimigo(
    CHARACTERS.BLACK_KNIGHT.coords,
    images.characters.black_knight,
    50,
    350,
    CHARACTERS.BLACK_KNIGHT.size_w,
    CHARACTERS.BLACK_KNIGHT.size_h,
    CHARACTERS.BLACK_KNIGHT.sprite_w,
    CHARACTERS.BLACK_KNIGHT.sprite_h,
    8,
    100
  );
  frameRate(30);
  // somDoJogo.loop();
}

function keyPressed() {
  if (key === "ArrowUp" || key === " ") {
    somDoPulo.play();
    personagem.pula();
  }
}

function draw() {
  backgrounds.map((e) => {
    e.exibe();
    e.move();
  });
  personagem.exibe();
  personagem.aplicaGravidade();
  inimigo.exibe();
  inimigo.move();
  inimigo2.exibe();
  inimigo2.move();
  lastBackgrounds.map((e) => {
    e.exibe();
    e.move();
  });
  if (personagem.estaColidindo(inimigo)) {
    console.warn("colidiu");
    // noLoop();
  }
  score.show();
  score.addPoint();
}
