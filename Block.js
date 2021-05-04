class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      var bodyPos=this.body.position;	
      console.log(this.body.speed);

if(this.body.speed<3){
  push()
      translate(bodyPos.x, bodyPos.y);
      // rectMode(CENTER);
      rotate(this.body.angle)
      fill(255,0,255)
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0,0,this.r*2, this.r*2)
      pop()   }




else{
World.remove(world,this.body)
push();
this.Visiblity = this.Visiblity-5
tint(255,this.Visiblity)
image(this.image,this.body.position.x ,this.body.position.y,50,50)
pop();
}
    }
  }

     