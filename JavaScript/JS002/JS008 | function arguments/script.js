const wallPaint = function(Color1) {
    console.log("The wall has painted:" + Color1);
}

wallPaint("green");
wallPaint("purple");
wallPaint("no color");

const wallPaint2 = function(whichWall , Color) {
    console.log("The " + whichWall + " is painted " + Color)
};

wallPaint2("north-wall", "green");
wallPaint2("west-wall" , "purple")


// hier zijn de arguments gewisseld. Uitkomst is dan ook anders op de terminal
const wallPaint2 = function(Color, whichWall) {
    console.log("The " + whichWall + " is painted " + Color)
};

wallPaint2("north-wall", "green");
wallPaint2("west-wall" , "purple")

