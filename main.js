status1 = "";
function setup(){
canvas = createCanvas(400,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function start(){
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Ststus:DETECTING OBJECTS";
     input_value = document.getElementById("input").value;

}
function modelLoaded(){
    console.log("model loaded.")
    status1 = true;
}
function draw(){
    image(video, 0, 0, 380, 380);
}
