var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
createCanvas(400,400);
path = createSprite (200,200,10,10);
path.addImage (pathImg);
boy = createSprite (200,200,10,10);
boy.addAnimation ("corradomonstro", boyImg);
boy.scale = 0.05;
// Movendo o fundo 
//Criando menino que corre 
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(20,0,100,800);
leftBoundary.visible = false;
//Crie Boundary direito 
rightBoundary=createSprite(385,0,100,800);
rightBoundary.visible = false;
}

function draw() {
background(0);
boy.x = World.mouseX;
path.velocityY = -3;
// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
 //Reiniciar o fundo
if (path.y < 0){
path.y = path.height/2;
}
boy.collide (leftBoundary);
boy.collide (rightBoundary);
 drawSprites();
 }




