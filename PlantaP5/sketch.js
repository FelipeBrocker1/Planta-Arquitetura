function setup() 
{
  createCanvas(700, 700, WEBGL);
}

function draw() 
{
  background(222);
  
  //Corredor:
  rectMode(CENTER);
  strokeWeight(0);
  fill('gray')
  rect(0,0,400,30);

  //Sala:
  strokeWeight(9);
  fill(186,85,211);
  square(-125,-93,150);

  //Jardim:
  fill(153,255,153);
  rect(-157, 115, -90, 200);

  //Cozinha:
  fill(255,255,153);
  rect(-60,115,-100, 200);

  //Quartos:
  fill(210,180,140);
  rect(5,-93,100,150);
  rect(150,-93,100,150);
  
  //Suite:
  square(150, 100,170);

  //Banheiro:
  fill(224,224,224);
  rect(30,90,70,150);

  //Banheiro 2:
  square(218,0,32);

  //Area de Serviço:
  fill(250,128,114);
  rect(243,-104,80,-170);

  //Paredes:
  strokeWeight(0);
  fill(0,0,0);
  rect(77,-74,41,117);
  rect(117,-136,30,60);
  rect(40,-136,30,60);

  //Portas:
  strokeWeight(0.5);
  fill(160,82,45);
  rect(-100,-25,90,5);
  rect(31,-25,45,5);
  rect(125,-25,45,5);
  rect(-86,22,45,5);
  rect(-178,22,45,5);
  rect(20,22,45,5);
  rect(193,-90,5,45);
  rect(216,22,15,5);
  rect(100,22,15,5);
  rect(120,22,15,5);
  rect(-150,0,5,29);

  //Sofas:
  fill(255,0,0);
  rect(-125,-150,55,20);
  rect(-90,-100,20,55);
  
  //Cama vermelha:
  rect(-5,-100,20,45)

  //Almofadas:
  fill(0,255,0);
  rect(-140,-150,15,7);
  rect(-110,-150,15,7);
  rect(-90,-115,7,15);
  rect(-90,-85,7,15);

  //Mesa da sala:
  fill(139,69,19);
  square(-130,-100,35);
  square(-117,-79, 6);
  square(-143,-79, 6);

  //Mesa da cozinha:
  square(-60,100,35);
  square(-48,120, 6);
  square(-72,120, 6);

  //Armarinho:
  square(161,-150,20);

  //Balcão da cozinha:
  fill(210,105,30);
  rect(-75,50,50,15);
  rect(-92,123,15,130);
  rect(-60,180,50,15);

  //Travesseiros:
  fill(245,255,250);
  rect(-5,-128,20,10);
  rect(145,-128,20,10);
  rect(175,-128,20,10);
  rect(150,148,40,10);

  //Guarda Sol:
  fill(255,69,0);
  circle(-180,60,30);
  fill(139,0,0);
  rect(-180,85,30,8);

  //Guada Sol 2:
  fill(255,255,0);
  circle(-156,180,30);
  fill(128,0,128);
  rect(-160,155,30,8);

  //Cama azul:
  fill(0,0,255);
  rect(145,-100,20,45);

  //Cama verde:
  fill(124,252,0);
  rect(175,-100,20,45);

  //Cama azul clara:
  fill(127,255,212);
  rect(150,120,40,45);

  //Tapete:
  fill(75,0,130);
  rect(150,60,50,30);

  //Choveiro:
  fill(79,79,79);
  rect(53,135,5,30);
  rect(43,123,15,5);
  circle(28,123,15);
  
  //Passador de roupa:
  triangle(220,-170,230,-180,230,-160)
  rect(250,-170,40,20)

  //Pia:
  fill(192,192,192);
  square(46,40,20);

  //Maquina de lavar roupa:
  square(260,-130,25);
  fill(0,206,209);
  circle(260,-130,20)

  //Privada:
  rect(50,80,10,20);

  //Banheira:
  rect(225,0,10,20);

  //Vidro
  fill(173,216,230);
  rect(34,85,68,40);

  //Geladeira:
  fill(176,196,222);
  rect(-25,41,20,40);

  //Fogão:
  fill(54,54,54);
  square(-71,160,25);
  fill(0,0,0,);
  circle(-77,153,6);
  circle(-67,153,6);
  circle(-77,167,6);
  circle(-67,167,6);

  //Arvore:
  fill(160,82,45);
  rect(-135,130,10,60);
  fill(34,139,34)
  circle(-135,90,50)

}