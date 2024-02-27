let particles = [];
let mult = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  
  let noiseVal = random(-10,6);
  noiseDetail(noiseVal);
  
  let density = 30;
  let space = width/density;
  
  for(let x = 0; x < width; x += space){
    for (let y = 0; y < height; y += space){
      let p = createVector(x,y);
      particles.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(255);
  
  for(let i = 0; i <particles.length; ++i){   
   let angle = map(noise(particles[i].x * mult,particles[i].y * mult), 0, 1, 0, 720);
    particles[i].add(createVector(cos(angle),sin(angle)))
    ellipse(particles[i].x,particles[i].y, 1);
  }
}