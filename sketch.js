class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  add(x) {
    this.x += x.x;
    this.y += x.y;
  }
  mul(x) {
    this.x *= x.x;
    this.y *= x.y;
  }
  print() {
    console.log(this.x, this.y);
  }
  unpack() {
    return this.x, this.y;
  }
}

class Engine {
  constructor(x, y, xv, xa, yv, ya) {
    this.l = new Vector(x, y);
    this.v = new Vector(xv, yv);
    this.a = new Vector(xa, ya);
    this.accelerate();
  }
  accelerate() {
    this.v = new Vector(random(-4, 4), random(-2, 2));
    this.l.add(this.v);
    if (this.l.x >= width) {
      this.l.x = 0;
    }
    if (this.l.x < 0) {
      this.l.x = width - 0;
    }
    if (this.l.y >= height) {
      this.l.y = 0;
    }
    if (this.l.y < 0) {
      this.l.y = height - 0;
    }

    this.draw();
  }

  draw() {
    noStroke();
    fill(random(180), random(180), random(150));
    ellipse(this.l.x, this.l.y, 8, 8);
  }
}

const objs = [];

function setup() {
  x = 0;
  createCanvas(windowWidth - 50, windowHeight - 20);
}

const addCircle = () => {
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(100), random(45, 50));
};

function mousePressed() {
  objs.push(
    new Engine(mouseX, mouseY, 0, random(-1, 1) / 100, 0, random(-1, 1) / 100)
  );
}

function mouseMoved() {
  mousePressed();
}

function touchMoved() {
  mousePressed();
  return false;
}

function draw() {
  background(0);

  for (n of objs) {
    n.accelerate();
  }
  // v1.accelerate()
  // v1.draw()

  // v2.accelerate()
  // v2.draw()

  //   ellipse(v1.l.x,v1.l.y,10,10)

  // v2.draw()
  // v2.accelerate()

  //     // stroke()
  //     stroke(255);

  //    line(0,0,random(width),random(height))
  //    stroke(255,180,0,80);

  //    line(random(width),random(height),width,height)
  //    rect(random(x),random(height),10,random(height))
  //     x+=10
}
