var X= 15;
function Add_numbers_1() {
    document.write (20+X+"<br>");
}
function Add_numbers_2() {
    document.write (X+100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X= 15;
    document.write (20+X+"<br>");
}
function Add_numbers_2() {
    document.write (X+100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_1() {
    var X= 10;
    console.log (15+X);
}
function Add_numbers_2() {
    console.log (X+100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours()<20) {
        document.getElementById("Meetup").innerHTML="How are you today?";
    }
}

function get_Date() {
    if (new Date().getHours()<23) {
        document.getElementById("Late").innerHTML="You're Late!";
    }
}

function Age_Function() {
    Age= document.getElementById("Age").value;
    if (Age >= 21) {
        Vote="You are old enough to drink!";
    }
    else {
        Vote="You are not old enough to drink!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time> 12==Time<18) {
        Reply="It is the afternoon.";
    }
    else{
        Reply="It is the afternoon.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}