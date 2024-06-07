// Creates two paths of points and puts them into an SVG file
// Hit 's' to save the svg file

let svg; 

let path1 = [];
let path2 = [];

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  svg = new SvgBuilder();

  // Create two paths of points 
  for(let x = 50; x < width -50; x+=10){
    let y = random(50, 200);
    path1.push({x:x, y:y});
  }

  for(let x = 50; x < width -50; x+=10){
    let y = random(300, 450);
    path2.push({x:x, y:y});
  }

  // Put each path into the svg, in a group
  svg.startGroup();
  svg.addPath(path1);
  svg.endGroup();

  svg.startGroup();
  svg.addPath(path2);
  svg.endGroup();

  // End the svg
  svg.end();

}

function draw() {
  background("#ffffff")
  
  noFill();
  stroke("#000000");
  
  beginShape();
  for(let p of path1){
    vertex(p.x, p.y);
  }
  endShape();

  beginShape();
  for(let p of path2){
    vertex(p.x, p.y);
  }
  endShape();

  noLoop();
}

// Save the svg when the 's' key is pressed
function keyPressed(){
  if(key == "s"){
    svg.save();
  }
}

