var result = document.getElementById('result');
// var prenoms = ["Christophe", "Aurelie", "Guillaume", "Iphigenie", "Jean Eude", "Jackie", "Pierre", "Michel", "Robert"];
// result.innerHTML="Hello There !";

// for (var i=0; i<5; i++) {
//     console.log(i);

// }
    
// console.log(prenoms.length);
    
// for (var i = 0; i < prenoms.length; i++) {
//   //console.log( prenoms[i]);
//     result.innerHTML += prenoms[i] + " ";
// }


// var films =["Jurassic Park","Avatar", "Star Wars","Tron", "Géant de Fer","Titanic", "Laputa"];

// var j =0;
// while (j < films.length) {
//     console.log(films[j]);
//     result.innerHTML += films[j] + " ";
//     j++
// }







// function afficher() {
//     var coucou = "Coucou !";
//     console.log(coucou);
    
// }
// // //afficher();
// // console.log(coucou); 

// function addition(valeur1, valeur2) {
//     console.log(valeur1 + valeur2);
    
// }

// addition(2,5);


// var prenoms = ["damien", "Moi", "Lui", "Joachim"];
// var noms = ["Dune", "Narcis", "Eux", "Jesaisplus"];

// function personne(nom, prenom) {
//     result.innerHTML += "Bonjour " + nom + " " +prenom +"<br>"
//  }
// for (var i = 0; i < prenoms.length; i++) {
//     personne(noms[i],prenoms[i])
    
// }
// // personne("Pruvot","Fabian");
var input = document.getElementById('surprise');

function appuyer(){
    result.innerHTML= input.value;
}

var carre = document.getElementById('carre');

function moveLeft(){
carre.style.left= "0px";
}
function moveRight(){
    carre.style.left= "300px";
}




