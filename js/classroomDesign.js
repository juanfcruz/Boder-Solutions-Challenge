// Single-sketch example
function setup (){
    createCanvas (815, 600);
    fill('255');
    background('black');
    rect(12,12,790,575);
    var img = loadImage('arrow_Up.png'); // Loads image from file
  }
  
  x = [300,450,600,750]; // X position of each chair
  y = [100,220,340,460]; // Y position of each chair
  
  function draw(){
    //First row
    students(x[0], y[0]);
    students(x[1], y[0]);
    students(x[2], y[0]);
    students(x[3], y[0]);
    //Second row
    students(x[0], y[1]);
    students(x[1], y[1]);
    students(x[2], y[1]);
    students(x[3], y[1]);
    //Third row
    students(x[0], y[2]);
    students(x[1], y[2]);
    students(x[2], y[2]);
    students(x[3], y[2]);
    //Fourth row
    students(x[0], y[3]);
    students(x[1], y[3]);
    students(x[2], y[3]);
    students(x[3], y[3]);
  
    classroomAC(300,560); //Shows the blue AC
    teacher(60,120); //Shows teacher and desk (desk's parameters is not functional)
    image(img,900,900); // Image will work until it is in a webpage
  }
   //Teacher positioning
  var  teacher = function(teacherPostionX, teacherPositionY){
    noFill();
    rect(110,60,80,150); 
    ellipse(teacherPostionX, teacherPositionY, 80, 80);
    fill(255,0,0);
    text("Teacher", 40, 120);
    
  }
   //Students positioning
  var  students = function(studentsPostionX, studentsPositionY){
    noFill();
    ellipse(studentsPostionX, studentsPositionY, 80, 80);
    }
  
   //AC positioning, its center is at 400,575
  var classroomAC = function(acPostionX, acPositionY){
    fill('skyblue');
    rect(acPostionX, acPositionY,200,30); 
    //ellipse(400,575, 20, 20); Center of the rectangle
    fill('blue')
    text('Air conditioner', 355,580);
  }
  