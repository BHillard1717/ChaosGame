let focalPoints = []
let prevFocal = 0
let lastPointCoor = []
let repeat = 0

function setup() {
  createCanvas(400, 400);
  background(220)
  
  //Set the original points
  focalPoints.push([0,0])
  focalPoints.push([400,0])
  focalPoints.push([400,400])
  focalPoints.push([0,400])
  lastPointCoor.push(200)
  lastPointCoor.push(200)
  strokeWeight(10)
  stroke('red')
  for(var i = 0; i < focalPoints.length; i++){
    point(focalPoints[i][0], focalPoints[i][1])
  }
  strokeWeight(2)
  stroke('black')
  frameRate(120)
}

function draw() {
  //background(220);
  let validMove = false
  let currentPoint = 0
  while(validMove != true){
    currentPoint = floor(random(focalPoints.length))
    
    //restrictions
    
    //Can't use Previous Point
    // if(currentPoint != prevFocal){
    //   validMove = true
    //   prevFocal = currentPoint
    // }
    
    //Can't use a vertex one space anti-clockwise
    // if((prevFocal == 0 && currentPoint != 3) || (prevFocal != 0 && currentPoint != prevFocal - 1)){
    //   validMove = true
    //   prevFocal = currentPoint
    // }
    
    //Can't use a vertex 2 spots away
    // if((prevFocal == 0 && currentPoint != 2) ||(prevFocal == 1 && currentPoint != 3) || (prevFocal == 2 && currentPoint != 0) ||(prevFocal == 3 && currentPoint != 1)){
    //   validMove = true
    //   prevFocal = currentPoint
    // }
    
    //Can't use the neighbor if the same vertex has 
    //been chosen for the past two points
    //first check if the point has been chosen 2+
    if(prevFocal == currentPoint){
      repeat = repeat + 1
      validMove = true
    }else if( (repeat > 1) && ((prevFocal == 0 && currentPoint == 2) ||(prevFocal == 1 && currentPoint == 3) || (prevFocal == 2 && currentPoint == 0) ||(prevFocal == 3 && currentPoint == 1)) ){
        repeat = 0
        validMove = true
        prevFocal = currentPoint
      }else if(repeat < 2){
        repeat = 0
        validMove = true
        prevFocal = currentPoint
               
      }     
    
  }
  
  //get new point coordinates
  let x = (lastPointCoor[0] + focalPoints[prevFocal][0]) / 2
  let y = (lastPointCoor[1] + focalPoints[prevFocal][1]) / 2
  lastPointCoor[0] = x
  lastPointCoor[1] = y
  
  push()
  
  point(x,y)
  
  pop()
}