let carros = [];
let arvores = [];
let cidade = [];
let campo = [];

function setup() {
  createCanvas(800, 400);
  noStroke();
  
  // Criando carros na cidade
  carros.push(new Carro(200, 350));
  carros.push(new Carro(300, 350));
  carros.push(new Carro(500, 350));
  
  // Criando árvores no campo
  arvores.push(new Arvore(100, 250));
  arvores.push(new Arvore(150, 230));
  arvores.push(new Arvore(600, 260));
  arvores.push(new Arvore(650, 240));
  
  // Criando prédios na cidade
  cidade.push(new Predio(400, 200, 60, 150));
  cidade.push(new Predio(500, 180, 80, 170));
  
  // Criando plantas no campo
  campo.push(new Planta(50, 300));
  campo.push(new Planta(550, 320));
  campo.push(new Planta(600, 310));
}

function draw() {
  background(135, 206, 235); // Céu claro
  
  // Desenhando o campo (árvores e plantas)
  for (let i = 0; i < arvores.length; i++) {
    arvores[i].mostrar();
  }
  for (let i = 0; i < campo.length; i++) {
    campo[i].mostrar();
  }

  // Desenhando a cidade (carros e prédios)
  for (let i = 0; i < carros.length; i++) {
    carros[i].mostrar();
    carros[i].mover();
  }
  for (let i = 0; i < cidade.length; i++) {
    cidade[i].mostrar();
  }

  // Luzes representando a conexão do campo e da cidade
  fill(255, 223, 0);
  ellipse(100, 100, 30, 30); // Luz do campo
  ellipse(700, 100, 30, 30); // Luz da cidade
  
  // Texto de celebração
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("Agrinho 2025 - Conexão do Campo e da Cidade", width / 2, 50);
}

// Classe para árvores
class Arvore {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.altura = 40;
  }

  mostrar() {
    fill(34, 139, 34); // Cor das folhas
    ellipse(this.x, this.y - this.altura / 2, 50, 50); // Copa da árvore
    fill(139, 69, 19); // Cor do tronco
    rect(this.x - 10, this.y, 20, this.altura); // Tronco da árvore
  }

  crescer() {
    if (this.altura < 60) {
      this.altura += 0.2;
    }
  }
}

// Classe para plantas
class Planta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    fill(34, 139, 34);
    ellipse(this.x, this.y, 20, 20); // Folhas
    fill(139, 69, 19);
    rect(this.x - 5, this.y, 10, 15); // Caules
  }
}

// Classe para carros
class Carro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidade = random(1, 3);
  }

  mostrar() {
    fill(255, 0, 0); // Cor do carro
    rect(this.x, this.y, 40, 20); // Corpo do carro
    fill(0);
    ellipse(this.x + 10, this.y + 20, 15, 15); // Roda do carro
    ellipse(this.x + 30, this.y + 20, 15, 15); // Outra roda
  }

  mover() {
    this.x += this.velocidade;
    if (this.x > width) {
      this.x = -40; // Reseta a posição do carro
    }
  }
}

// Classe para prédios
class Predio {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  mostrar() {
    fill(169, 169, 169); // Cor do prédio
    rect(this.x, this.y, this.w, this.h); // Corpo do prédio
    fill(255);
    rect(this.x + 10, this.y + 10, this.w - 20, this.h - 20); // Janelas do prédio
  }
}





