function Call_Loop() {
    var Digit="";
    var  X=1;
    while(X<11){
        Digit +="<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}


var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop(){
    for (Y=0; Y<Instruments.length; Y++){
        Content += Instruments[Y]+"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function(){
    var Array_Picture=[];
    Array_Picture[0]="One";
    Array_Picture[1]="Two";
    Array_Picture[2]="Three";
    Array_Picture[3]="Four";
    document.getElementById("Array").innerHTML="This is the number"+Array_Picture[2]+".";
}

function constant_function(){
    const Musical_Instrument= {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the"+ Musical_Instrument.type+"was"+Musical_Instrument.price;
    var X=10;
X=7;
document.write(X);

var X=82;
document.write(X);
{
    let X=33;
    document.write("<br>"+X);
}
document.write("<br>"+X);
}



let car= {
    make:"Dodge",
    model:"Viper",
    year:"2021",
    color:"red",
    description: function(){
        return "The car is a" + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description();
