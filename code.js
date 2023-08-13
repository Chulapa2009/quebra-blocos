var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var box1 = createSprite(25,25,50,50);
box1.shapeColor = "green";
var box2 = createSprite(75,25,50,50);
box2.shapeColor = "black";
var box3 = createSprite(125,25,50,50);
box3.shapeColor = "orange";
var box4 = createSprite(175,25,50,50);
box4.shapeColor = "purple";
var box5 = createSprite(225,25,50,50);
box5.shapeColor = "teal";
var box6 = createSprite(275,25,50,50);
box6.shapeColor = "red";
var box7 = createSprite(325,25,50,50);
box7.shapeColor = "cyan";
var box8 = createSprite(375,25,50,50);
box8.shapeColor = "rgb(100,224,60)";
var score=0
var box9 = createSprite(25,75,50,50);
box9.shapeColor = "rgb(100,224,60)";
var box10 = createSprite(75,75,50,50);
box10.shapeColor = "cyan";
var box11 = createSprite(125,75,50,50);
box11.shapeColor = "red";
var box12 = createSprite(175,75,50,50);
box12.shapeColor = "teal";
var box13 = createSprite(225,75,50,50);
box13.shapeColor = "purple";
var box14 = createSprite(275,75,50,50);
box14.shapeColor = "orange";
var box15 = createSprite(325,75,50,50);
box15.shapeColor = "black";
var box16 = createSprite(375,75,50,50);
box16.shapeColor = "green";

ball = createSprite(200,300,20,20);

raquete = createSprite(200,380,80,10);

createEdgeSprites()
function draw() {
  background("Orange")
  textSize(22);
  fill("Black")
text("Score .."+score, 10, 390);
    
  
  
  
  if (keyDown("space")) {
    ball.velocityX=18
    ball.velocityY=19
    
  }
  raquete.x=World.mouseX
  
  ball.bounceOff(raquete)
  if(ball.isTouching(bottomEdge)){
  ball.x = 200;
  ball.y = 300;
  ball.velocityX = 0;
  ball.velocityY = 0;
  }
  ball.bounceOff(edges)

  
  if (ball.bounceOff(box1)) {
  box1.destroy();
  score=score+1
  }
   if (ball.bounceOff(box2)) {
  box2.destroy();
  score=score+1
  }
   if (ball.bounceOff(box3)) {
  box3.destroy();
  score=score+1
  }
   if (ball.bounceOff(box4)) {
  box4.destroy();
  score=score+1
  }
   if (ball.bounceOff(box5)) {
  box5.destroy();
  score=score+1
  }
   if (ball.bounceOff(box6)) {
  box6.destroy();
  score=score+1
  }
   if (ball.bounceOff(box7)) {
  box7.destroy();
  score=score+1
  }
   if (ball.bounceOff(box8)) {
  box8.destroy();
  score=score+1
  }
   if (ball.bounceOff(box9)) {
  box9.destroy();
  score=score+1
  }
   if (ball.bounceOff(box10)) {
  box10.destroy();
  score=score+1
  }
   if (ball.bounceOff(box11)) {
  box11.destroy();
  score=score+1
  }
   if (ball.bounceOff(box12)) {
  box12.destroy();
  score=score+1
  }
   if (ball.bounceOff(box13)) {
  box13.destroy();
  score=score+1
  }
   if (ball.bounceOff(box14)) {
  box14.destroy();
  score=score+1
  }
   if (ball.bounceOff(box15)) {
  box15.destroy();
  score=score+1
  }
   if (ball.bounceOff(box16)) {
  box16.destroy();
  score=score+1
  }
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
