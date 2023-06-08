var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png")
  pathImg = loadImage("path.png")
  
 
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200)
  path.addImage(pathImg)
  path.scale=1.1;
  
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  boy = createSprite(200,300);
  boy.addAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png")
  boy.scale=0.7;
//crie um sprite de menino
//adicione uma animação de corrida para ele
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=World.mouseX;
  
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
