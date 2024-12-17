// let canvas;
// let amountStars = 100;

// class Star {
//     constructor(x, y, z) {
//         this.x = (Math.random() - 0.5) * 100;
//         this.y = (Math.random() - 0.5) * 100;
//         this.z = (Math.random() - 0.5) * 100;
//     }
//     place() {
//         pop();
//         translate(this.x, this.y, this.z);
//         sphere(4, 3);
//     }
// }

// function setup() {
//     noCursor();
//     canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//     canvas.parent('davotwo');
//     canvas.style('z-index', '-1');
//     canvas.position(0, 0);
//     background(0,0,20);

//     stroke(255,255,255);
//     noStroke();
//     fill(255);



//     for (let i = 0; i < starAmount; i++) {
        



//     }

//     pop();
//     translate((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
//     sphere(4, 3);
// }
  
// function draw() {
//   // camera(500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 500*cos(frameCount * 0.001) - 250, 0, 0, 0);
  
//   // background(10, 10, 41);


//   // circle(mouseX, mouseY, 5);


    
    
    
//     // sphere(2000);
//     box(400);
//     orbitControl();
  
// }

let stars = [];
let angle = 0;
let boxSize = 0;

function setup() {
    noCursor();
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('sketch3d');  // Attach canvas to the div
    canvas.style('position', 'fixed');  // Ensure canvas is fixed
    canvas.style('top', '0');  // Align the canvas to the top of the page
    canvas.style('left', '0');  // Align the canvas to the left of the page
    canvas.style('z-index', '-1');  // Put the canvas behind the content

    for (let i = 0; i < 1000; i++) {
        let x = random(-1200, 1200);
        let y = random(-1200, 1200);
        let z = random(-1200, 1200);
        stars.push(createVector(x, y, z));
    }
}

function draw() {
    background(0,0,10);
    ambientLight(255);

    let radius = 700-boxSize;
    let camX = radius * cos(angle+90);
    let camZ = radius * sin(angle+90);
    let camY = -500;

    camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

    angle -= 0.0005;

    noStroke();
    fill(255);
    for (let star of stars) {
        push();
        translate(star.x, star.y, star.z);
        sphere(2);
        pop();
    }
    stroke(255);
    noFill();

    if (boxSize > 0) boxSize -= 2;

    box(40);
    
    orbitControl();

// }
// function mouseClicked() {
//     boxSize = 60;
}
