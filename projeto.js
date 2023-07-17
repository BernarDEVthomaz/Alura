let costas1;
let costas2;
let quieto;
let farra1;
let farra2;
let gameover;
let olhando;
let situation = "nao olhando"
let nextchange = 5000
function preload(){
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");
  gameover = loadImage("gameover.jpg");
  olhando = loadImage("olhando.jpg");
}

function setup() {
  createCanvas(1024, 576);
}
function troca()
{
  
  nextchange = millis() + random(2500,10000)
  if (situation === "olhando")
  {
    situation = "nao olhando"
    
  }
  else if (situation === "nao olhando")
  {
    situation = "olhando"
    
  }
  
}
function draw() {
  if (millis()>nextchange)
  {
    troca();
  }
  
  if (situation === "olhando")
  {
    image(olhando,0,0)
  }
  if (situation === "nao olhando")
  {
    tempo = millis()%1000
    if (tempo<500)
    {
      image(costas1,0,0)
    }
    if (tempo>500)
    {
      image(costas2,0,0)
    }
  }
  
  if (mouseIsPressed == true || keyIsPressed == true)
  {
    if(situation === "olhando")
      {
        image(gameover,0,0)
      }
    image(farra1,50,420,100,160,180,100,450,720)
    image(farra2,462,420,100,160,180,100,450,720)
    image(farra1,850,420,100,160,180,100,450,720)
    if(situation === "olhando")
      {
        textSize(64)
        fill("red")
        textAlign(CENTER,CENTER)
        text("GAME OVER",width/2,height/2)
        noLoop();
      }
    
  }
  else
  {
    image(quieto,50,420,100,160,180,100,450,720)
    image(quieto,462,420,100,160,180,100,450,720)
    image(quieto,850,420,100,160,180,100,450,720)
  }
}