function preload() {
  // faz o preload de todas as imagens usadas para o objeto 'images'
  images = {
    backgrounds: {
      mainScreen: loadImage("imagens/cenario/mainScreen/background.jpg"),
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
  fonts = {
    eater: loadFont('assets/fonts/Eater/Eater-Regular.ttf'),
    quicksand: {
      regular: loadFont('assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
      bold: loadFont('assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
    },
  };
  backgrounds = [];
  lastBackgrounds = [];
  somDoJogo = loadSound("sons/trilha_jogo.mp3");
  somDoPulo = loadSound("sons/jump3.wav");
}