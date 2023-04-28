noseX=0;
noseY=0;
function preloade(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setap(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}