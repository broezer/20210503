// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2;
let xStep = 0;
let fps = 12;

//let capturer = new CCapture({ format: 'png', framerate: fps });

function setup() {
  createCanvas(400, 400);
  frameRate(50);
  c1 = color(0, 160, 158);
  c2 = color(222,116,251);
  c3 = color(249, 255, 175);
}


function draw() {
  
  //Background;
  push();
    clear();
    translate(xStep,0);
    setGradient(0, 0, width, height, c1, c2, c3, X_AXIS);
    setGradient(width, 0, width, height, c1, c2, c3, X_AXIS);
    if (frameCount % 400 == 0){
        xStep = 0;
    }else{
       xStep--;  
    }
    
  pop();
  
    
 translate( 0, (-width*0.2));
  for (let i = 1; i <=3; i++) {
    let lineY = (i * (height * 0.1)) + (i * (height * 0.20));
    setGradient( height*0.075,  lineY, height*0.85 , width*0.2, c1, c2, c3, Y_AXIS);
  }
  
  /*
  if (frameCount === 1) {
    // start the recording on the first frame
    // this avoids the code freeze which occurs if capturer.start is called
    // in the setup, since v0.9 of p5.js
    capturer.start();
  }

  if (frameCount === 400) {
    noLoop();
    console.log('finished recording.');
    capturer.stop();
    capturer.save();
    return;
  }

  // handle saving the frame
  console.log('capturing frame');
  capturer.capture(document.getElementById('defaultCanvas0'));
  */
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(c);
      line(x, i, x + w, i);
      
       if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
