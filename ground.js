class Ground {
    //PROPERTIES
    constructor(x, y, width, height){
        var options = {isStatic:true};

        //box1.body
        //This - refers to the current object inside sketch.js
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    //FUNCTIONS
    //drawSprites()
    //box1.display()
    display(){
        //NameSpacing
        var pos = this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
 

}