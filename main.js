var nose_x=0;
var nose_y=0;
var diffrence=0;
var right_wrist_x=0;
var left_wrist_x=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,160);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function modelloaded(){
console.log("posenet is initialized")
}
function gotposes(results){
if (results.length>0){
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.log("nose_x="+nose_x+"nose_y="+nose_y);
right_wrist_x=results[0].pose.rightWrist.x;
left_wrist_x=results[0].pose.leftWrist.x;
diffrence=left_wrist_x-right_wrist_x;
console.log("right_wrist_x"+right_wrist_x+"left_wrist_x"+left_wrist_x);
}
}
function draw(){
background("#000000");
fill("#02FDF0");
stroke("#02FDF0");
textSize(diffrence)
text("shiven",50,400)
document.getElementById("textSize").innerHTML="font size="+diffrence+"px";
}