class Box {
    //PROPERTIES
    constructor(x, y, w, h){
        var options = {restitution: 0.9};

        //box1.body
        //This - refers to the current object inside sketch.js
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    //drawSprites()
    //box1.display()
    display(){
        //NameSpacing
        var pos = this.body.position;
        //Add the new setting with translate & rotate
        push(); //Adds a new thing
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill(255);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        //Revert back to the old setting without translate & rotate
        pop(); //comes back to the previous thing
    }
 

}


//KEYWORD - Reserved word for which the computer has a special meaning
//Function, return, if, for, var, const....

/*
-Rotation about an angle
    rotate(angle)
-Translation about a position
    translate(position)
*/