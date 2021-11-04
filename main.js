img = "";

function preload()
{
   img = loadImage("dog_cat.jpg"); 
}

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
}

function draw()
{
    image(img, 0,0, 640, 420);
    fill("#FF7276");
    text("Dog", 45, 75);
    noFill();
    stroke("#90EE90");
    rect(36, 60, 450, 350);
}