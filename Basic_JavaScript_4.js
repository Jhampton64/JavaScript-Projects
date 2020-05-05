function my_Dictionary() {
    var Animal={
        Species:"Cat",
        Color:"Brown",
        Breed:"Ragdoll",
        Age:3,
        Sound:"Meow"
    };
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML=Animal.Color;
}