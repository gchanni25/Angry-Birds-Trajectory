class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = loadImage("sprites/smoke.png");
    this.traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if (this.body.velocity.x > 8 && this.body.position.x > 200) {
      var array = [this.body.position.x,this.body.position.y];
      this.traj.push(array);
    }
    for (var i = 0; i < this.traj.length; i++){
        image(this.trajectory, this.traj[i][0], this.traj[i][1]);
    }
  }
}
