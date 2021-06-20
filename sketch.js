var bg, iss, issIMG, hasDocked, spacecraft, s1, s2, s3, s4;

function preload(){
  bg = loadImage("spacebg.jpg");
  issIMG = loadImage("iss.png");

  s1 = loadImage("spacecraft1.png");
  s2 = loadImage("spacecraft2.png");
  s3 = loadImage("spacecraft3.png");
  s4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(400, 300, 50, 50);
  spacecraft.scale = 0.15;
  spacecraft.addImage("r",s4);
  spacecraft.addImage("l",s3);
  spacecraft.addImage("d",s2);
  spacecraft.addImage("u",s1);

  iss = createSprite(400, 150, 50, 50);
  iss.scale = 0.75
  iss.addImage(issIMG);

  hasDocked = false;
}

function draw() {
  background(bg);  

  console.log(spacecraft.x,spacecraft.y);

  if(!hasDocked){
    if(keyDown("left")){
      spacecraft.x-=1
      spacecraft.changeImage("l",s3)
    }

    if(keyDown("right")){
      spacecraft.x+=1
      spacecraft.changeImage("r",s4)
    }

    if(keyDown("down")){
      spacecraft.changeImage("d",s2)
    }

    if(keyDown("up")){
      spacecraft.y-=1
    }

  }

  if(spacecraft.x<350 & spacecraft.x>344 & spacecraft.y<229 & spacecraft.y>223 ){
    spacecraft.x = 347;
    spacecraft.y = 226;

    console.log("Docking Successful!");

    hasDocked = true;
  }

  if(hasDocked === true){
    textSize(40);
    fill("white");
    text("Docking Successful!",200,350);
  }

  drawSprites();
}