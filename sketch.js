const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;

//crie a variável bg_img
//crie a variável food
// crie a variável rabbit

var button;
var bunny;

function preload()
{
  //complete as 3 linhas seguintes com o nome da variável = loadImage
  ('background.png');
  ('melon.png');
  ('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  //btn 1
  button = createImg('cut_btn.png');
  button.position(200,30);
  button.size(50,50);

  //código correto do evento mouse clicked executar o drop (para cortar e cair a fruta)
  //button.mouseClicked(drop);
  //button.mouseclicked(drop);
  //button.drop(mouseClicked);
  //button.drop(mouse clicked);

  
  rope = new Rope(8,{x:220,y:30});
  ground = new Ground(200,690,600,20);

  //código correto para criar o sprite do bunny:
  //bunny = createsprite(200,620,100,100);
  //bunny = createSprite(200,620,100,100);
  //bunny = Sprite(200,620,100,100);
  //bunny = criarSprite(200,620,100,100);

  //código correto para adicionar imagem ao sprite:
  //bunny.image(rabbit);
  //bunny.add(rabbit);
  //bunny.addimage(rabbit);
  //bunny.addImage(rabbit);

  bunny.scale = 0.2;

  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  //qual código correto centraliza as imagens
  //rectMode(CENTER);
  //rect(CENTER);
  //Mode(CENTER);
  //rectMode(LEFT);

  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img,0,0,displayWidth+80,displayHeight);

  push();
  imageMode(CENTER);
  if(fruit!=null){
    image(food,fruit.position.x,fruit.position.y,70,70);
  }
  pop();

  rope.show();

  Engine.update(engine);
  ground.show();

  //código correto para desenhar os sprites na tela:
  //drawsprites();
  //drawSprites();
  //Sprites();
  //draw();
   
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null; 
}





