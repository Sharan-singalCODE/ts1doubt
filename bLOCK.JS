
class Block  {
    constructor(x, y, width, height){
     
      var options = {
        restitution:0.4,
        friction:0.0,
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      
          }
    display(){
      var pos = this.body.position;
        var angle = this.body.angle;

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            strokeWeight(4);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
    }
    
  };
  