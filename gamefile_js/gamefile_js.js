var ySpeed = 3;
let stars = [];
let c = 990;
var rays = [];
var slider;
var mouseClick = false;
var lineX;
var d;
var lose = false;
var win = false;

var lHeight = 0;
function setup() {
createCanvas(windowWidth, windowHeight);
for (var i = 0; i < 5; i++) {
  stars[i] = ellipse(random(0,windowWidth),random(0,windowHeight),2);
}

  slider = createSlider(0,20,0);
  slider.position(900, 300);
}

function mousePressed(){
  lineX = mouseX;
  lHeight = 0;
  mouseClick = !mouseClick;
}

function draw() {
  if (win == false && lose == false){
  background(0);
  noStroke(0);
  fill(255);
  for (var i = 0; i < stars.length; i++) {
    stars[i] = ellipse(random(0,windowWidth),random(0,windowHeight),2);
  }
  noStroke();
  fill(230,234,255,200);
  ellipse(windowWidth/2,10000,18500);
  rectMode(CENTER);
  fill(0, 255, 100);
  rect(windowWidth/2, 700, 400, 200);
  strokeWeight(slider.value());
  stroke(0,0,255);
  noFill();
  ellipse(windowWidth/2, 700, 500);

  //line(lineX,lHeight, windowWidth/2,700);


  fill(255,0,0);
  if(mouseClick == true){
fall();
drawLine(lineX);
  }
if(lHeight >= 600 && lineX > 758 && lineX < 1160 ){
  lose = true;
  }

  if(sqrt(((lineX-windowWidth)*(lineX-windowWidth))+((lHeight-700)*(lHeight-700)) <= 500)){
    textSize(50);
    text('weve been hit');
  }
  if((windowWidth/2-lineX)*(windowWidth/2-lineX) + (700-lHeight)* (700-lHeight) <= 250*250
  && slider.value() >= 11
)
{
    win = true;
    strokeWeight(2);
    stroke(255);
    fill(255);
    textSize(50);
    text('weve been hit', windowWidth/2,windowHeight/2);
  }
}else
  if (win == true){
    lHeight = 0;
    background(0)
    textSize(70)
    text('YOU SAVED THE PLANTS ENJOY THE MEAL', 20, windowHeight/2);
    if (keyIsPressed === true) {
      win = false;
    }
  }else
  if(lose == true){
    lHeight = 0;
    background(0)
  noStroke();
  textSize(50);
  text('YOU HAVE FAILED TO PROTECT THE PLANTS, CLICK TO TRY AGAIN',
  100, windowHeight/2);
  if (keyIsPressed === true) {
    lose = false;
  }
  }
}

function drawLine(x){
  strokeWeight(5);
  stroke(255,0,0);
  line(x, 0, x, lHeight);
}


function fall(){
  lHeight = lHeight + ySpeed;
}
