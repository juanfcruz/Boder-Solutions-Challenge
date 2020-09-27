// Single-sketch example
function setup (){
    createCanvas (800, 560);
    background('black');
    fill('white');
    rect(10,10,780,540);
    fill('gray');
    rect(250,10,540,216);
    fill('black');
    textSize(50);
    text("BAR", 470, 120)

  }
  
  tablePositionX = [130, 130, 130, 310, 490, 670] //X position of each round table
  tablePositionY = [120, 300, 480, 480, 480, 480] //Y position of each round table

  acCenterPositionX = [130,220,580,220,400,580] //A,B,C,D,E,F,G,H
  acCenterPositionY = [120,305,305,475,475,475] //A,B,C,D,E,F,G,H

  personPositionX = [100, 160, 280, 340, 450, 510, 70, 190, 360, 440, 540, 720 ]; //1,2,3,4,5,6,7,8,9,10,11,12
  personPositionY = [60, 60, 280, 280, 370, 370, 520, 520, 440, 440, 520, 440]; //1,2,3,4,5,6,7,8,9,10,11,12


  
  function draw(){
    //Round tables
    tables(tablePositionX[0], tablePositionY[0]); //1
    tables(tablePositionX[1], tablePositionY[1]); //2
    tables(tablePositionX[2], tablePositionY[2]); //3
    tables(tablePositionX[3], tablePositionY[3]); //4
    tables(tablePositionX[4], tablePositionY[4]); //5
    tables(tablePositionX[5], tablePositionY[5]); //6


   
    //AC squares
    ac(acCenterPositionX[0]-25,acCenterPositionY[0]-25); 
    ac(acCenterPositionX[1]-25,acCenterPositionY[1]-25);
    ac(acCenterPositionX[2]-25,acCenterPositionY[2]-25);
    ac(acCenterPositionX[3]-25,acCenterPositionY[3]-25);
    ac(acCenterPositionX[4]-25,acCenterPositionY[4]-25);
    ac(acCenterPositionX[5]-25,acCenterPositionY[5]-25);

    // red dots (people)
    people(personPositionX[0], personPositionY[0]);
    people(personPositionX[1], personPositionY[1]);
    people(personPositionX[2], personPositionY[2]);
    people(personPositionX[3], personPositionY[3]);
    people(personPositionX[4], personPositionY[4]);
    people(personPositionX[5], personPositionY[5]);
    people(personPositionX[6], personPositionY[6]);
    people(personPositionX[7], personPositionY[7]);
    people(personPositionX[8], personPositionY[8]);
    people(personPositionX[9], personPositionY[9]);
    people(personPositionX[10], personPositionY[10]);
    people(personPositionX[11], personPositionY[11]);
    people(personPositionX[12], personPositionY[12]);

    //Letters for AC
    fill('black');
    textSize(28);
    text("A", acCenterPositionX[0]-10,acCenterPositionY[0]+10);
    text("B", acCenterPositionX[1]-10,acCenterPositionY[1]+10);
    text("C", acCenterPositionX[2]-10,acCenterPositionY[2]+10)
    text("D", acCenterPositionX[3]-10,acCenterPositionY[3]+10);
    text("E", acCenterPositionX[4]-10,acCenterPositionY[4]+10);
    text("F", acCenterPositionX[5]-10,acCenterPositionY[5]+10);
    text("G", acCenterPositionX[6]-10,acCenterPositionY[6]+10);

    // Numbers for people
    textSize(25);
    text("1", personPositionX[0]-8,personPositionY[0]+8);
    text("2", personPositionX[1]-5,personPositionY[1]+8);
    text("3", personPositionX[2]-5,personPositionY[2]+8)
    text("4", personPositionX[3]-5,personPositionY[3]+8);
    text("5", personPositionX[4]-5,personPositionY[4]+8);
    text("6", personPositionX[5]-5,personPositionY[5]+8);
    text("7", personPositionX[6]-5,personPositionY[6]+8);
    text("8", personPositionX[7]-5,personPositionY[7]+8);
    text("9", personPositionX[8]-5,personPositionY[8]+8);
    text("10", personPositionX[9]-15,personPositionY[9]+8);
    text("11", personPositionX[10]-15,personPositionY[10]+8);
    text("12", personPositionX[11]-15,personPositionY[11]+8);

    //Middle table
    middleTable(60,120); //Shows square table

  }
   //Middle table positioning
  var  middleTable = function(middleTableX, middleTableY){
    noFill();
    rect(250,300,300,50); 
   
  }
   //Tables positioning
  var  tables = function(tableX, tableY){
    noFill();
    ellipse(tableX, tableY, 100, 100);
    }
  
   //ac positioning
  var ac = function(ACX, ACY){
    fill('skyblue');
    rect(ACX, ACY,50,50); 
  }

  // People positioning
  var people = function(personX, personY){
      fill('red');
      ellipse(personX, personY, 25, 25);
  }
  