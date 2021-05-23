noseX = 0;

noseY = 0;

function preload() {

mustache = loadImage("https://i.postimg.cc/wByfxpB1/m.png");

}

function setup() {

canvas = createCanvas(300,300);

canvas.center();

video = createCapture(VIDEO);

video.size(300, 300);

video.hide();

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);

}

function modelLoaded() {

console.log("Posenet is Initialized");

}

function gotPoses(results) {

if(results.length > 0) {

console.log(results);

noseX = results[0].pose.nose.x - 34;

noseY = results[0].pose.nose.y + 1;

}

}

function draw() {

image(video, 0, 0, 300, 300); 

image(mustache, noseX, noseY, 70,40)
   
}

function takesnapshot() {

save('myFilterImage.png');

}