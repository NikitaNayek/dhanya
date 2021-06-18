var tanjiro;
var tanjiroImg;
var doma, domaImg;
var rui, ruiImg;
var muzan, muzanImg;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20;
var sword;
var swordImg;
function preload()
{
tanjiroImg = loadImage("tanjiro.png");
domaImg = loadImage("doma.png");
ruiImg = loadImage("rui.png");
muzanImg = loadImage("muzan.png");
swordImg = loadImage("rengoku1.jpeg");	
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	tanjiro = createSprite(displayWidth - 50, displayHeight - 60, 40, 100);
	tanjiro.addImage("protaganist", tanjiroImg);
	tanjiro.scale = 0.3;

	doma = createSprite(displayWidth/2, displayHeight/2, 40, 40);
	doma.addImage("villain", domaImg);
	doma.scale = 0.2;

	rui = createSprite(displayWidth/2 - 100, displayHeight/2 , 40, 40);
	rui.addImage("villain", ruiImg);
	rui.scale = 0.22;

	muzan = createSprite(displayWidth/2 + 100, displayHeight/2 , 40, 40);
	muzan.addImage("villain", muzanImg);
	muzan.scale = 0.2;

	sword = createSprite(displayWidth/2-10, displayHeight/2-90, 20, 30);
	sword.addImage("destination", swordImg);
	sword.scale = 0.2;

	m1 = createSprite(displayWidth-400, displayHeight/8-20, 8, displayHeight/4);
	m1.shapeColor = "green";

	m2 = createSprite(displayWidth/4, 20, 8, displayHeight/4);
	m2.shapeColor = "green";

	m3 = createSprite(displayWidth/2, 30, 7, displayHeight/4);
	m3.shapeColor = "green";

	m4 = createSprite(120, 250, displayWidth/4, 8);
	m4.shapeColor = "green";

	m5 = createSprite(200, 400, displayWidth/7, 8);
	m5.shapeColor = "green";

	m6 = createSprite(displayWidth-10,displayHeight-10 , displayWidth/7, 10);
	m6.shapeColor = "green";
	
	m7 = createSprite(displayWidth - 70, 450, 8, displayHeight/4);
	m7.shapeColor = "green";

	m8 = createSprite(100, 100, displayWidth/5, 8);
	m8.shapeColor = "green";

	m9 = createSprite(displayWidth/2 - 20, 550, 8, displayHeight/5);
	m9.shapeColor = "green";
	
	m10 = createSprite(displayWidth - 300, 50, displayWidth/4,8);
	m10.shapeColor = "green";

	m11 = createSprite(displayWidth/8, 20, 8, 90);
	m11.shapeColor = "green";

	m12 = createSprite(1000, 500, displayWidth/6, 8);
	m12.shapeColor = "green";

	m13 = createSprite(830, 120, 8, displayHeight/4);
	m13.shapeColor = "green";
	
	m14 = createSprite(900, 600, displayWidth/8, 8);
	m14.shapeColor = "green";

	m15 = createSprite(displayWidth-200, displayHeight-10, 8, displayHeight/4);
	m15.shapeColor = "green";

	m16 = createSprite(displayWidth-500, displayHeight-50, displayWidth/4, 8);
	m16.shapeColor = "green";

	m17 = createSprite(displayWidth-300, 700, 8, displayHeight/4);
	m17.shapeColor = "green";

	m18 = createSprite(displayWidth-900, 500, 8, displayHeight/4);
	m18.shapeColor = "green";

	m19 = createSprite(displayWidth-1200, 500, displayWidth/5, 8);
	m19.shapeColor = "green";

	m20 = createSprite(displayWidth-800, 750, 8, displayHeight/4);
	m20.shapeColor = "green";
  
	m21 = createSprite(displayWidth-80, 50, 8, displayHeight/4);
	m21.shapeColor = "green";

	m22 = createSprite(displayWidth-200, 270, displayWidth/5, 8);
	m22.shapeColor = "green";

	m23 = createSprite(displayWidth/6-50, 1070, displayWidth/5, 8);
	m23.shapeColor = "green";

	m24 = createSprite(displayWidth/10-50, 170, displayWidth/5, 8);
	m24.shapeColor = "green";

	m24 = createSprite(displayWidth/10-50, 770, displayWidth/5, 8);
	m24.shapeColor = "green";

	m25 = createSprite(displayWidth/10, 970, displayWidth/5, 8);
	m25.shapeColor = "green";

	m26 = createSprite(displayWidth/4+170, 10, 8, displayHeight/2);
	m26.shapeColor = "green";

	m27 = createSprite(150, 680, 8, displayHeight/4);
	m27.shapeColor = "green";

	m28 = createSprite(350, 670, displayWidth/6, 8);
	m28.shapeColor = "green";

}


function draw() {
  background(0);
  
  if(keyDown("down"))
  {
	  tanjiro.y+=5;
  }

  if(keyDown("up"))
  {
	  tanjiro.y-=5;
  }

  if(keyDown("left"))
  {
	  tanjiro.x-=5;
  }

  if(keyDown("right"))
  {
	  tanjiro.x+=5;
  }

  muzan.x=tanjiro.x;
  
  drawSprites();
 
}



