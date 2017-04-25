var namespace = "http://www.w3.org/2000/svg"

// Write your code here!

var skin= 1

var goose = 1

function changeGoose(){

if(skin == 1){

    makeRect(20,150,30,30,"green")
    
goose = makeImage("http://vignette2.wikia.nocookie.net/pixelpeople/images/3/38/Duck.png/revision/latest?cb=20130409230957", 20,150,30,30)

skin = 2

}else if(skin == 2){

    makeRect(20,150,30,30,"green")
    
goose = makeImage("http://www.pngmart.com/files/3/Goose-PNG-Photos.png",20,150,31,31)

skin =1 
}

}



var lives = 3 
var livesNumber = makeText(lives, 170, 180, 20, "'Press Start 2P', cursive", "black")
var livesText = makeText("Lives",150,190, 10,"'Press Start 2P', cursive","black")

var how = "yes"

var road2 = makeRect(0,30,200,40,"black")

var road = makeRect(0,100,200,40,"black")

var nest = makeImage("https://img.clipartfox.com/50b65e478be357469a3108eff860fa86_nest-clip-art-at-clker-com-empty-bird-nest-clipart_600-371.png",0,0,40,40)

var nest2 = makeImage("https://img.clipartfox.com/50b65e478be357469a3108eff860fa86_nest-clip-art-at-clker-com-empty-bird-nest-clipart_600-371.png",50,0,40,40)

var nest3 =  makeImage("https://img.clipartfox.com/50b65e478be357469a3108eff860fa86_nest-clip-art-at-clker-com-empty-bird-nest-clipart_600-371.png",100,0,40,40)

var nest4 =  makeImage("https://img.clipartfox.com/50b65e478be357469a3108eff860fa86_nest-clip-art-at-clker-com-empty-bird-nest-clipart_600-371.png",150,0,40,40)



var truck = makeImage("http://pngimg.com/uploads/pickup_truck/pickup_truck_PNG16304.png", 20,40,40,40)

var truck2 =  makeImage("http://pngimg.com/uploads/pickup_truck/pickup_truck_PNG16304.png", 80,90,40,40)

var difficulty= 1

function animation(){
  
 
    
   if(difficulty == 1){ 
    
  if(how == "yes" && lives > 0){
  move(truck,1,0)
  move(truck2,1,0)
  }
  

    
   }else if(difficulty == 2){
   
   if(how == "yes" && lives > 0){
  move(truck,1.5,0)
  move(truck2,1.5,0)
  }
  

  
   }else  if(difficulty == 3){
   
   if(how == "yes" && lives > 0){
  move(truck,2,0)
  move(truck2,2,0)
  }

   }
  





  requestAnimationFrame(animation)
  
 var x1 = getX(truck)
 var x2 = getX(truck2)
 
 
 if(x1 > 200){
   setX(truck,-10)
   }
  
  if(x2 > 200){
    setX(truck2,-10)
  }
   }
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(collides(goose,truck)){
  
  setY(goose,150)
  setX(goose,20)
  lives = lives-1
   
    livesNumber.innerHTML =lives
    }
    
   if(collides(goose,truck2)){
   
setY(goose,150)
  setX(goose,20)
  lives = lives-1
  
  livesNumber.innerHTML =lives
   } 

    if(lives == 0){
    
    makeText("GAME OVER",10,100,20,"'Press Start 2P', cursive", "black")
    
    how = "no"
     }

    if(collides(goose,nest)){
   
makeText("YOU WIN",10,100,20,"'Press Start 2P', cursive", "black")
    how = "no"
     } 

    if(collides(goose,nest2)){
   
makeText("YOU WIN",10,100,20,"'Press Start 2P', cursive", "black")
  
    how = "no"
    } 

if(collides(goose,nest3)){
   
makeText("YOU WIN",10,100,20,"'Press Start 2P', cursive", "black")
   
how = "no"
} 
    
    
if(collides(goose,nest4)){
   
makeText("YOU WIN",10,100,20,"'Press Start 2P', cursive", "black")
 how = "no"  

    
    
    
}



addEventListener('keydown', moveGoose)


function moveGoose(event){
  
 var y = getY(goose)
 var x = getX(goose)
  
  if(event.key == "w" && how == "yes"){
move(goose, 0, -10)

  }
  
if(event.key == "a" && how == "yes"){

move(goose,-10,0)

}
    
if(event.key == "d" && how == "yes"){

move(goose,10,0)

}
    
if(event.key == "s" && how =="yes"){

move(goose,0,10)

}
    

 if(y < 5){
     setY(goose,5)
 }
    
if(y > 170){
setY(goose,170)
}
    
if(x <10){
setX(goose,10)
}   
    
if(x > 175){
setX(goose,175)
}



    
    
    
}
  


function easy(){

difficulty = 1 

animation()


}
  
  function normal(){
  
      difficulty = 2
      
      animation()
  
  }

function hardcore(){

difficulty = 3

animation()
}

function help(){

difficulty = 4

animation()

}











// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  } 
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  
  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin && 
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
