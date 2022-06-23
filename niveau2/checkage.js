{
var inva ="age invalide, Veuillez entrer votre date de naissance sous le format jj/mm/aaaa (ex : 05/09/1990)";
var msg="Désolé vous devez avoir 18 ans ou plus pour voter";   
var neefutur="vous ne pouvez pas être née dans le futur ! (si c'est le cas quel sont les chiffres gagnant de l'euromillion du 7 juin 2023 merci)"
var age = prompt("Veuillez entrer votre date de naissance (ex : 05/01/2001)", "jj/mm/aaaa");
var jour = parseInt(age.substring(0,2)); // parsint converti une chaine de caractere en nombre
var mois = parseInt(age.substring(3,5)); // substring decoup une chaine de caractere pour ne recuperer qu'une partie(ici on recupere que le mois de la position 3 a la position (5-1) 
var annee = parseInt(age.substring(6,10));// chaine :    jj/mm/aaaa
var agee = 0;                             // position :  012345678910       

console.log(jour); //vérifier la valeur de jour
console.log(typeof jour); //vérifie le type de la variable jour

console.log(mois);
console.log(typeof mois);

console.log(annee);
console.log(typeof annee);


if(mois>12)
{
    alert(inva);
    window.location.reload();
}


//verification des mois et jour si c'est correct en brut(c'est moche mais ca marche)
 if(mois==1 && jour>31)
{

    alert(inva);
    window.location.reload();
}

if(mois==2 && jour>29){

    alert(inva);
    window.location.reload();

}

if(mois==3 && jour>31){

    alert(inva);
    window.location.reload();

}

if(mois==4 && jour>30){

    alert(inva);
    window.location.reload();

}
if(mois==5 && jour>31){

    alert(inva);
    window.location.reload();

}
if(mois==6 && jour>30){

    alert(inva);
    window.location.reload();

}
if(mois==7 && jour>31){

    alert(inva);
    window.location.reload();

}

if(mois==8 && jour>31){

    alert(inva);
    window.location.reload();

}
if(mois==9 && jour>30){

    alert(inva);
    window.location.reload();

}
if(mois==10 && jour>31){

    alert(inva);
    window.location.reload();

}

if(mois==11 && jour>30){

    alert(inva);
    window.location.reload();

}

if(mois==12 && jour>31){

    alert(inva);
    window.location.reload();

}

//fin de la vérification des jours et des mois



function getAge(date) { 
    var diff = Date.now() - date.getTime();
    agee = new Date(diff); 
    return(agee.getUTCFullYear() - 1970);
}

var age = getAge(new Date(annee, mois, jour));

console.log(getAge(new Date(annee, mois, jour)));
console.log(age);



if(age>120)
{

    alert("date de naissance incorrecte");
    window.location.reload();

}
if(age<18)
{
    if(age<0){
        alert(neefutur);
        window.location.reload();
    }
    else{
    alert(msg);
    document.location.href="https://www.vie-publique.fr/fiches/23926-quelles-sont-les-conditions-pour-voter";

    }

}
else{

    if(isNaN(age))
    {

        alert(inva);
        window.location.reload();

    }
}
} 
