function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight (0.1);
  stroke(255,255,255,50);
  background(255,255,255);
  frameRate(1);
}

function draw() {
  clear(); 
  translate (30,30);
  var num =10;
  var shift = 60;
  var width= innerWidth-2*30;
  var length= innerWidth - 2*30;
  var sideLen = (width/num);
  var space = 80;
  var alpha = 20; 
  var red = [random(200,255),0,0,alpha]; 
    var orange = [255,random(100,200),random(30,50),alpha];
  var yellow = [random(20,70),random(0,10),random(0,10),alpha];
  var green = [0,random(100,255),random(0,80),alpha];
  var blue =  [0,random(100,255),random(100,255),alpha];
  var purple = [random(50,100), 0, random(100,255),alpha]; 
  
  var colors = [red,orange,yellow,green,blue, purple];
  
  //make squares 
 
  
  for (var c = 0; c<10; c++) {
    var count =0; 
  for (var x=0; x< num*sideLen; x= x+sideLen){
     alpha = 20; 
    for(var y=0; y <num*sideLen; y=y+sideLen ){
      
      var color = colors[count];
      fill(color);
      
      
      ellipse(x,y,random(-shift,shift)); 
    quad( x+random(-shift,shift)+space,y + space + random(-shift,shift), 
    x+sideLen+random(-shift,shift)-space,y +space + random(-shift,shift), 
x+sideLen-space +random(-shift,shift),y+sideLen -space + random(-shift,shift), 
x + space + random(-shift,shift),y+sideLen-space+random(-shift,shift));
        
    red = [random(200,255),0,0,alpha]; 
    orange = [255,random(100,200),random(30,50),alpha];
    yellow = [random(200,255),random(200,255),random(0,10),alpha];
    green = [0,random(100,255),random(0,80),alpha];
    blue = [0,random(0,80),random(100,255),alpha];
    purple = [random(50,100), 0, random(100,255),alpha]; 
  
    colors = [red,orange,yellow,green,blue, purple];
      
      }
    if (count< colors.length-1) {
    count++; 
    }
    else if (count == colors.length-1) {

      count = 0; 
    }
    
  }
  }
  
  //noLoop();
}