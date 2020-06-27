class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.yInicial = height - this.altura - variacaoY;
    this.variacaoY = variacaoY;
    this.y = this.yInicial;
    this.gravidade = 13;
    this.velocidadeDoPulo = 0;
    this.max_jump = 0;
  }

  pula() {
    if(this.max_jump < 2) {
      this.velocidadeDoPulo = -60;
      this.max_jump++;
    }
    // this.y -= 50;
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.max_jump = 0;
    }
  }

  estaColidindo(inimigo) {
    const precisao = 1;
    return collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
  }
}