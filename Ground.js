class Ground{
constructor(x,y,height,width){
var option ={
isStactic=true,
'restituion':0,
'friction':0,
'density':1,
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width=width;
this.height=height;

World.add(world,this.body);
}
display(){

fill(255);
rect(this.body.position.x, this.body.position.y, this.width,this.height);
}
};