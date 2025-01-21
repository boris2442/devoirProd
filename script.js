//programme qui calcule et affiche le perimetre et a surface d'un rectangle
// exercice 2.4
let long = parseFloat(prompt("entrer la longueur du rectangle"));
let larg = parseFloat(prompt("entrer la largeur du rectangle"));

if(long ==0 || larg ==0 ||long<0 || larg<0){
    alert("la longueur et la largeur vont etre des valeurs positives");
    let somme= nombre1+nombre2;
}else{
    let perimetre= 2*(long+larg);
let aire = long*larg;
alert(`le perimetre de ce champ est ${perimetre} et l'aire de ce rectangle ${aire}`)
}
// let somme= nombre1+nombre2;

// exercice 2.6

//programme javascript qui calcule l'aire et le perimetre d'un cercle connaissant sa son rayon

const pi=3.14;

   
let rayon = parseFloat(prompt('entrer le rayon du cercle'));
if(rayon<0 || rayon ==0){
    alert("le rayon du cercle doit avoir une valeur positive");

}else{
    let perimetreCercle=2*rayon*pi ;
    let aireCercle=pi*rayon*rayon;
   
    alert(`le perimetre de ce cercle est ${perimetreCercle} et l'aire de ce cercle${aireCercle}`);
    // let somme= nombre1+nombre2;
}

//exercice2.7

// programmejavascript qui lie deux variable entiers cacule et affiche le prodit et leur somme


let nombre1=parseInt(prompt('entrer le premier nombre'));
let nombre2=parseInt(prompt("entrer le deuxieme nombre"));
let sommeNombre= nombre1+nombre2;
let  produitNombre=nombre1*nombre2;
alert(`la somme de ces deux nombre est :${sommeNombre} et le produit de ces deux nombres est ${produitNombre}`);

// exercice 2.8 

//progrmme qui lit deux entiers, calcule et affiche le quotient et le reste de la division euclidienne a l'ecran

let nbre1=parseInt(prompt("entrer le premier entier"));
let nbre2=parseInt(prompt("entrer le second entier"));

if(nbre2==0){
    alert("le diviseur doit etre different de zero");
}else{
    let reste=nbre1%nbre2;
    let quotient=(nbre1-reste)/nbre2;
    alert(`le reste de cette division est${reste} et le quotient de cette division est ${quotient} `);
}

//exerice 2.5

// programme qui calcule le montant TTC tout en sachant que la TVA eat 20% et le nombre d'article est NA et le prix unotaire est PU;


const TVA =0.2;
let PU, NA, TTC;

PU=parseInt(prompt("entrer le prix unitaire de l'article"));
NA=parseInt(prompt("entrer le nombre d'article"));
if(PU < 0 || NA < 0 || PU==0 || NA==0 ){
    alert("le prix unitaire et la quantité vont etre des valeurs positives");

} else{
    let TTN=PU *NA;
    TTC=TTN*1.2;
    alert(`le montant tout taxe compris ${TTC} `);
}




// structure cobditionnnelle


// exercice 3.1 page 19

// programme qui recurepe la valeur maximum entre duex valeur


let Nombre1, Nombre2, difference;
Nombre1=parseFloat(prompt('entrer la valeur du premier entier '));
Nombre2=parseFloat(prompt('entrer la valeur du deuxieme entier '));

difference= Nombre1-Nombre2;

if(difference<0){
    alert(`la valeur maxmale es ${Nombre2}`);
}else if(difference==0){
    alert("ces deux valeurs sont egaus");
}else{
    alert(`${Nombre1} est superieur à ${Nombre2} donc, la valeur maximale est ${Nombre1} `);
   
}

// exercice 3.2


// programme qui lit un nombre et nous imforme sil est positif ou null

let nombrePositifNegatif= parseFloat(prompt("entrer la valeur du d'un nombre"));

let differenceNombre= 0-nombrePositifNegatif;
if(differenceNombre<0){
    alert(`${nombrePositifNegatif} est un nombre positive`)
}else if(nombrePositifNegatif >0){
    alert(`${nombrePositifNegatif} est un nombre negatif`)
}else{
    alert(`${nombrePositifNegatif} est un nombre null`)
}


//exercice 3.3

// programme qui lit un reel et donne sa valeur absolue 

let nombreNomAbsolue=parseFloat(prompt("entrer la valeur d'un nombre"));
if(nombreNomAbsolue<0){
    let valeurAbsolue=0-nombreNomAbsolue;
    alert(`${nombreNomAbsolue} a pour valeur absolue ${valeurAbsolue} ` );
}else if(nombreNomAbsolue > 0){
    alert(`${nombreNomAbsolue} a pour valeur absolue ${nombreNomAbsolue}`);
}else{
    alert("ce nombre a pour valeur absolue 0 car c'est un nombre null");
}

//exercice 3.4

// programme qui resoud l'quation du premier ordre de la forma: ax + b =0

let a, x, b;
a=parseFloat(prompt("entrer la valeur de a"));
b=parseFloat(prompt("entrer la valeur de b"));

if(a==0){
    alert(`${a} doit etre dirrerent de zero`);
}else{
    x= -b/a;
    alert(`la solution a cet equation est ${x}`);
}

// exercice 3.5

// programe qui demande a lutilisateur d'entrer deux nombres et d'afficher le signe de leur produit!

let nombreProduit1, nombreProduit2, produinNombre;

nombreProduit1=parseFloat(prompt("entrer le premier nombre"));
nombreProduit2=parseFloat(prompt("entrer le second nombre"));

if(nombreProduit1<0 && nombreProduit2<0 || nombreProduit1>0 && nombreProduit2>0 ){
    alert("le signe du produit de ces nombres est  + ")
} else if(nombreProduit1==0 || nombreProduit1==0) {
    alert("le signe du produit de ces nombres est  + ")
}else{
    alert("le signe du produit de ces nombres est  - ")
}
