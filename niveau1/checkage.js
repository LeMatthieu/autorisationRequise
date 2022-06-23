{
var inva ="age invalide, veuillez entrer votre age en année (exemple : 18 ans => 18)";
var msg="Désolé vous devez avoir 18 ans ou plus pour voter";   
var age = prompt("Veuillez entrer votre âge", "votre âge");

parseInt(age)

if(age<18)
{
    
    alert(msg);
    document.location.href="https://www.vie-publique.fr/fiches/23926-quelles-sont-les-conditions-pour-voter";
}
else{

    if(isNaN(age))
    {

        alert(inva);
        window.location.reload();

    }
}
}
