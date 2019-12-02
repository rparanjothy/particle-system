// console.log("hi")

// const setup = ()=>{
//     console.log("hi")
// }


// const draw = ()=>{
//     console.log("hi")
// }




// const movable=(e)=>{ return {
//     show:(s)=>ellipse(e.l.x,e.l.y,s,s),
//     drive:()=>e.l.add(e.a)

// }
// }


class Vector {
    constructor(x,y){
        this.x=x
        this.y=y
    }
    add(x){
        this.x+=x.x;
        this.y+=x.y
    }
    mul(x){
        this.x*=x.x;
        this.y*=x.y
    }
    print(){
        console.log(this.x,this.y)
    }
    unpack(){
        return this.x,this.y
    }

}

class Engine{
    constructor(x,y,xv,xa,yv,ya){
        this.l=new Vector(x,y)
        this.v=new Vector(xv,yv)
        this.a=new Vector(xa,ya)
        this.accelerate()

    }
    accelerate(){
        // if (this.v.x>4){
        //     console.log("reducing")
        //     this.a.x-=random(1)
        // } 

        // if (this.v.y>4){
        //     console.log("reducing")
        //     this.a.y-=random(1)
        // } 
      
        // this.v.add(this.a)
        this.v=new Vector(random(-4,4),random(-2,2))
        this.l.add(this.v)
        if (this.l.x>=width) {
            // l=true
            this.l.x=0
        }
        if (this.l.x<0) {
            // l=true
            this.l.x=width-0
        }
        if (this.l.y>=height) {
            // l=true
            this.l.y=0
        }
        if (this.l.y<0) {
            // l=true
            this.l.y=height-0
        }
        
        this.draw()
    }

   
    

    draw(){
        noStroke()
        fill(random(180),random(180),random(150))
        ellipse(this.l.x,this.l.y,10,10)
    }

    
    
}

const objs=[]

function setup() {
    x=0
    createCanvas(600,400);
    background(240)
    l=new Vector(0,height/2)
    v=new Vector(0,0)
    a=new Vector(.01,0)
    console.table(l,v,a)
    // v1=new Engine(50,40,0,0.001,0,0)

    
  

}



const addCircle=()=>{
    fill(random(255),random(255),random(255),random(255))
    ellipse(random(0,width),random(0,height) , random(100), random(45,50));
}



function mousePressed(){
    objs.push(new Engine(mouseX,mouseY,0,random(-1,1)/100,0,random(-1,1)/100))

//    console.log(objs)
}


function mouseMoved(){
    mousePressed()
}

var draw=()=> {

    background(20)
    v.add(a)
    l.add(v)
    if (l.x>=width) {
        l.x=0
    }
    
    // ellipse(l.x,l.y,20,20)

    

    // for (n of nn){
    //     objs.push(new Engine(random(0,width),random(0,height),0,random(-1,1)/100,0,0))
    // }
    // console.log(objs.length)
    
    for (n of objs){
        n.accelerate()
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