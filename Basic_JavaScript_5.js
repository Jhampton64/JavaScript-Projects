document.write(typeof "Word");
document.write(typeof 4);

document.write(2E310);
document.write(-3E310);
document.write(7>4);
console.log(3+5);
document.write("10"+5);
document.write(11==11);
document.write(4==11);

x=10;
z=10;
document.write(x===z);

a=10;
b=12;
document.write(a===b);

e= 82;
f="82";
document.write(e===f);

c="Apple";
d="Pear";
document.write(c===d);

document.write(5>2 && 10>4);
document.write(5>10 && 10>4);
document.write(6>10 || 10>6);
document.write(5>10 || 10>21);

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}

function not_Function() {
    document.getElementById("Not").innerHTML=!(5>10);
}

function not2_Function() {
    document.getElementById("Not2").innerHTML=!(21>10);
}
