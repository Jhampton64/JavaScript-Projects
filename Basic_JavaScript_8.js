function full_Sentence() {
    var part_1="I have";
    var part_2="to understand";
    var part_3="the concept";
    var part_4="of Love.";
    var whole_sentence= part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

function slice_Method() {
    var Sentence="Come sing my song all night long. ";
    var Section =Sentence.slice(5,9);
    document.getElementById("Slice").innerHTML=Section;
}

function string_Method() {
    var x=192;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

    function precision_Method() {
        var x=12938.3012987376112;
        document.getElementById("Precision").innerHTML=x.toPrecision(10);
}