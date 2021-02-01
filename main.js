document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});

const password = document.querySelector('#password')
const checkbox = document.querySelector('#toggle-password-visibility')

// Créer une fonction que une checkbox permettra de voir le password en toute lettre
function voirPwd(){
  //  si le checkbox est checked 
   if (checkbox.checked){
    //  afficher le type de password est text
    password.type = 'text'
   }
  //  si non, le type de password est password
  else{
    password.type = 'password'
  }
 };
//  écouteur sur l'évènement click sur checkbox à lancer fonction voirPwd
  checkbox.addEventListener('click', voirPwd);