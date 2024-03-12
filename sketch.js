let x = 0;
let y = 0;

let moon = 0;
let moonSize = 300;

function setup() {
  // it runs only one time
  createCanvas(900, 600);
  angleMode(RADIANS);
}

function draw() {
  let bg_color = color(0,25,25,255);
  let moon_color = color(255,255,255,255);
  background(bg_color);
  
  // Moon
  moon -= 0.01;    
  moon %= -Math.PI*2;
  
  // Moon Phases
  noStroke();
  let phaseX = width/2;
  let phaseY = height/2;

  let { phase1, phase2, phase3, phase4 } = MoonPhases(moon, moon_color, bg_color);

  fill(phase1);
  arc(phaseX, phaseY, moonSize, moonSize, PI/2, 3 * PI/2);
  fill(phase2);
  arc(phaseX, phaseY, moonSize, moonSize, 3 * PI/2, PI/2);

  let heightPhase = moonSize;
  let widthPhase = map(Math.cos(moon), 0, 1, 0, moonSize);

  fill(phase3);
  arc(phaseX, phaseY, widthPhase - 2, heightPhase + 1, PI/2, 3 * PI/2);
  fill(phase4);
  arc(phaseX, phaseY, widthPhase - 2, heightPhase + 1, 3 * PI/2, PI/2);
}

// Custom function to calculate moon phase colors
function MoonPhases(angle, moonColor, bgColor) {
  let phase1, phase2, phase3, phase4;

  if (-Math.PI/2 < angle && angle < 0) {
    phase3 = moonColor;
    phase4 = moonColor;
    phase1 = moonColor;
    phase2 = bgColor;
  } else if (-Math.PI < angle && angle < -Math.PI/2) {
    phase1 = moonColor;
    phase3 = bgColor;
    phase4 = bgColor;
    phase2 = bgColor;
  } else if (-3*Math.PI/2 < angle && angle < -Math.PI) {
    phase4 = bgColor;
    phase2 = moonColor;
    phase1 = bgColor;
    phase3 = bgColor;
  } else if (-2*Math.PI < angle && angle < -3*Math.PI/2) {
    phase4 = color(0,255,0,0);
    phase3 = moonColor;
    phase1 = bgColor;
    phase2 = moonColor;
  }

  return { phase1, phase2, phase3, phase4 };
}
