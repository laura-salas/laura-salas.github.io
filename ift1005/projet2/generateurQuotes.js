
/*Quotes qui sont choisies alatoirement*/
var temoignageQuotes = ["Le forfait évasion a changé ma vie! Maintenant je peux aller sur mon île et relaxer.<br> \
J'ai aménagé un endroit pour faire la sieste au bord de la plage.<br> Quand je me réveille je peux boire de l'eau de noix de coco fraichement ceuillit. Merci Tom Nook!",
    
"Je voudrais remercier Tom Nook pour la création du forfait évasion.<br> \
Je me suis faits pleins de nouveaux amis grâce à mon île, tout le monde veut la visiter!<br> \
Mon activité préférée est de regarder les étoiles filantes avec mes nouveaux amis.",
    
"Je ne regrette pas d'avoir investi dans le forfait évasion, mais je regrette de ne pas l'avoir fait plutôt! <br> \
J'adore creuser pour trouver des fossiles. J'ai presque fini la collection de mon musée. Il ne me manque plus que le crâne d'un brachiosaure!",
    
"Grâce à Tom Nook j'ai rencontré l'amour. \
Après m'être inscrit au forfait évasion, je me suis installé sur mon île et un beau jour il y avait un visiteur au camping. C'est là où j'ai rencontré GOGO! Depuis ce jour nous nous quittons plus.<br> \
Merci au forfait évasion!",
    
"Je n'ai jamais eu de passion dans ma vie. Ma mère m'a conseillé de partir en voyage pour découvrir le monde.<br>\
Je suis arrivé par hasard sur une île gérée par Tom Nook et j'y \
ai découvert la guitare. Maintenant je joue de la guitare tous les dimanches pour Tom Nook et ses amis sur les îles des forfaits évasions!"
];


/*Nom du personnage selon l'image choisie*/
var names = [
    "Lily",
    "Erik",
    "Mabel",
    "Harvey",
    "Apollo",
    "Gladys",
    "Orville",
    "Daisy Mae",
    "Tommy & Timmy",
    "Molly",
    "Louis-Vincent"
];

//Met une nouvelle image de charactere au footer  et change les quotes 
function changeTemo() {
   //Generation chiffres aleatoires
    var numberImage = Math.floor(Math.random() * 11) + 1;
    var numberText = Math.floor(Math.random() * 4);

    var imagePath = "assets/char-" + String(numberImage) + ".png";
    var texto = temoignageQuotes[numberText];

    //Remplacer le contenu par ceci 
    document.getElementById('temo-img').src = imagePath;
    document.getElementById('temoignageText').innerHTML = "«" + texto + "»";
    document.getElementById('temoignageName').innerHTML = names[numberImage - 1];
}


//Onload, executer
document.addEventListener("DOMContentLoaded", function(event) {
    changeTemo();
});