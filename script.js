const dice = [5];

var ones = 0;
var twos = 0;
var threes = 0;
var fours = 0;
var fives = 0;
var sixes = 0;

var total = 0;
var bonus = 0;
var finalTotal = 0;

var d1Clicked = false;
var d2Clicked = false;
var d3Clicked = false;
var d4Clicked = false;
var d5Clicked = false;

function rollDice(){
  for(let i=0; i<6; i++){
    dice[i] = Math.floor(Math.random() * 6) + 1;
  }
  D1();
  D2();
  D3();
  D4();
  D5();
  
}

let el = document.getElementById("b1");
el.addEventListener("click", function(){rollDice()}, false);


function D1(){
  
    let el = document.getElementById("d1").innerHTML='<img src="diePics/Die' + dice[0] + '.png" alt=dice>';
  

  
  return dice[0];
}

function D2(){
   let el = document.getElementById("d2").innerHTML='<img src="diePics/Die' + dice[1] + '.png" alt=dice>';
  return dice[1];
}

function D3(){
   let el = document.getElementById("d3").innerHTML='<img src="diePics/Die' + dice[2] + '.png" alt=dice>';
  return dice[2];
}

function D4(){
   let el = document.getElementById("d4").innerHTML='<img src="diePics/Die' + dice[3] + '.png" alt=dice>';
  return dice[3];
}

function D5(){
   let el = document.getElementById("d5").innerHTML='<img src="diePics/Die' + dice[4] + '.png" alt=dice>';
  return dice[4];
}



function addOnes(){
  for(let i=0; i<6; i++){
    if(dice[i] == 1){
      ones++;
    }
  }
  total += ones;
  document.getElementById("n1").innerHTML= ones;
  showTotal();
  
}

let a = document.getElementById("n1");
a.addEventListener("click", function(){addOnes()}, false);

function addTwos(){
  for(let i=0; i<6; i++){
    if(dice[i] == 2){
      twos++;
    }
  }
  total += twos*2
  document.getElementById("n2").innerHTML= twos*2;
  showTotal();
}

let b = document.getElementById("n2");
b.addEventListener("click", function(){addTwos()}, false);

function addThrees(){
  for(let i=0; i<6; i++){
    if(dice[i] == 3){
      threes++;
    }
  }
  total += threes*3;
  document.getElementById("n3").innerHTML= threes*3;
  showTotal();
}

let c = document.getElementById("n3");
c.addEventListener("click", function(){addThrees()}, false);

function addFours(){
  for(let i=0; i<6; i++){
    if(dice[i] == 4){
      fours++;
    }
  }
  total += fours*4;
  document.getElementById("n4").innerHTML= fours*4;
  showTotal();
}

let d = document.getElementById("n4");
d.addEventListener("click", function(){addFours()}, false);

function addFives(){
  for(let i=0; i<6; i++){
    if(dice[i] == 5){
      fives++;
    }
  }
  total += fives*5;
  document.getElementById("n5").innerHTML= fives*5;
  showTotal();
}

let e = document.getElementById("n5");
e.addEventListener("click", function(){addFives()}, false);

function addSixes(){
  for(let i=0; i<6; i++){
    if(dice[i] == 6){
      sixes++;
    }
  }
  total += sixes*6;
  document.getElementById("n6").innerHTML= sixes*6;
  showTotal();
}

let f = document.getElementById("n6");
f.addEventListener("click", function(){addSixes()}, false);

function showTotal(){
  document.getElementById("t1").innerHTML = total;
  showFinalTotal();
}

function calcFinalTotal(){
  finalTotal = total+bonus;
  return finalTotal;
}

function showFinalTotal(){
  if(total>=63){
    bonus = 35;
    document.getElementById("t2").innerHTML = bonus;
  }
  document.getElementById("t3").innerHTML = calcFinalTotal();
}