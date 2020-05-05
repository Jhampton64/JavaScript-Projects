function addition_Function(){
    var addition=4+4;
    document.getElementById("Math").innerHTML="4+4="+ addition;
}

function subtraction_Function(){
    var subtraction=4-4;
    document.getElementById("Sub").innerHTML="4-4="+ subtraction;
}

function multiplication(){
    var simple_Math=4*4;
    document.getElementById("Sub").innerHTML="4*4="+ simple_Math;
}

function division(){
    var simple_Math=4/4;
    document.getElementById("Sub").innerHTML="4/4="+ simple_Math;
}

function more_Math(){
    var simple_Math=(4+5)*20/5-20;
    document.getElementById("Multi").innerHTML="4 plus 5, multiplied by 20, divided by 5 and then subtracted by 20 equals"+ simple_Math;
}

function ZX(){
    var simple_Math=32%7;
    document.getElementById("Multi").innerHTML="When you divide 32 by 7 you have a remainder of:"+ simple_Math;
}

function Advent(){
    var x=30;
    document.getElementById("Multi").innerHTML=-x;
}

function Adventx(){
    var x=30;
    x++
    document.write(x);
}

function Adventz(){
    var x=35;
    x--
    document.write(x);
}

window.alert(Math.random() * 100);