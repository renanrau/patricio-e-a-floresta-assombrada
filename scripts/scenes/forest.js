class Forest {
  constructor() {
    this.current_enemy = 0;
    this.textNo = 0;
  }
  setup() {
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
      CHARACTERS.PIG.sprite_h
    );
    enemies = [];
    Object.keys(CHARACTERS).map((enemy) => {
      if (['ANCIENT_BOAR', 'PIG'].indexOf(enemy) === -1) {
        enemies.push(
          new Inimigo(
            CHARACTERS[enemy].coords,
            images.characters[enemy.toLowerCase()],
            50,
            enemy === 'BLACK_KNIGHT' ? 350 : 45,
            CHARACTERS[enemy].size_w,
            CHARACTERS[enemy].size_h,
            CHARACTERS[enemy].sprite_w,
            CHARACTERS[enemy].sprite_h,
            enemy === 'BLACK_KNIGHT' ? 20 : 10,
            enemy === 'BLACK_KNIGHT' ? 500 : 200,
          )
        );
      }
    });
  }
  draw() {
    const skippedIntro = this.textNo > 3 // check if all texts has passed
    const ENEMY = enemies[this.current_enemy];
    const VISIBLE_ENEMY = ENEMY.x < -ENEMY.largura;

    backgrounds.map((e) => {
      // show and move each background layer
      e.exibe();
      e.move();
    });

    if (skippedIntro) {
      ENEMY.exibe();
      ENEMY.move();
      if (VISIBLE_ENEMY) {
        this.current_enemy++;
        if (this.current_enemy > enemies.length - 1) {
          this.current_enemy = 0;
        }
        ENEMY.velocidade = random(10, 20);
      }
    }

    personagem.exibe();

    if (skippedIntro) {
      personagem.aplicaGravidade();
      // personagem.ancientMode();
    }

    lastBackgrounds.map((e) => {
      e.exibe();
      e.move();
    });

    if (skippedIntro) {
      if (personagem.estaColidindo(ENEMY)) {
        console.warn("colidiu");
        noLoop();
      }
      score.show();
      score.addPoint();
    }

    if (!skippedIntro) {
      this._callIntroText();
    }
  }
  keysPressed(key) {
    if (key === "ArrowUp" || key === " ") {
      if(this.textNo <= 3) {
        this.textNo++;
      } else {
        somDoPulo.play();
        personagem.pula();
      }
    }
  }
  _callIntroText() {
    const dialogTexts = [
      'Este é o Patrício >',
      'Um porquinho que, cansado dos maus tratos do ser humano, decidiu ser livre >',
      'Assim, fugiu do criadouro onde era mantido pelos humanos, e adentrou uma floresta próxima >',
      'Sem saber quais perigos encontraria >'
    ]
    textSize(20);
    // textFont(fonts.quicksand.regular);
    textAlign(RIGHT);
    fill('#fff');
    text(dialogTexts[this.textNo], width - 500, height - 200, 300, 300);
    print(dialogTexts[this.textNo]);
  }
}
