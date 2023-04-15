function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
    }
    
    function modelLoaded(){
        console.log('poseNet is initialized');
    }
    
    function gotPoses(results){
    if(results.length > 0){
        console.log(results);


        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x 
        difference = floor(leftWristX - rightWristX)
    }
    }
    
    
    function draw(){
        background('#0000FF');

        textSize(difference);
        fill('#00ff00');
        text('peter', 50, 400);
    }


    