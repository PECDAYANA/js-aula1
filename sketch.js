function setup() {
    createCanvas(800, 800);
    background("red");
  }
  
  function draw() {
    fill("blue");
    stroke("yellow");
    
    
    //console.log(mouseX,mouseY);
    
    if(mouseIsPressed){
      //console.log("foi clicado");
      rect(mouseX,mouseY,30, 20, 55, 55);
  }
    
  }