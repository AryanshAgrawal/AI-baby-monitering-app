img = "";
status = "";
objects = [];
function preload() {
    music=loadSound("be_happy.mp3");
}
function setup() {
    canvas = createCanvas(500, 300);
    canvas.position(330, 170);
    video=createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    objectDectector = ml5.objectDetector('cocossd', modalloaded);

}
function draw() {
    image(video,0, 0, 500, 300);
    if (status != "") {
        objectDectector.detect(video,gotresult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML="Status: Object detected";

            if(objects[i].label=="person"){
            document.getElementById("status2").innerHTML=" Status: Baby found";
             music.stop();
             console.log("Baby found");
            }
            else{
            document.getElementById("status2").innerHTML="Status: Baby not found";
            music.play();
            console.log("Baby not found");
            }
           }

        }
    }

function modalloaded() {
    console.log("modalloaded");
    status = true;
}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    }
    
    else {
        console.log(results);
        console.log("length of array:" + results.length);
        objects = results;
    }
}
