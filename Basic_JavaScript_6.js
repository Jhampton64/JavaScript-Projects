function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").Value;
    Can_ride=(Height<52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+"to ride.";
}


function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a"+ Erik.Vehicle_Color +"-colored" + Erik.Vehicle_Model + "manufactured in" + Erik.Vehicle_Year;
}




function Console(Make,Model,Year,Color) {
    this.Console_Make=Make;
    this.Console_Model=Model;
    this.Console_Year=Year;
    this.Console_Color=Color;
}
var May= new Console("Sony", "Playstation 4", 2013, "Black");
var Adam= new Console("Microsoft", "X-box one", 2013, "White and Black");
var Liam= new Console("Nintendo", "Wii-U", 2012, "White");
function myFunction() {
    document.getElementById("New_and_This").innerHTML="May has a"+ May.Console_Year + May.Console_Color + May.Console_Model + "That she keeps in good shape.";
}

function count_Function(){
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_point= 8;
        function Plus_two() {Starting_point +=2;}
        Plus_two();
        return Starting_point;
    }
}