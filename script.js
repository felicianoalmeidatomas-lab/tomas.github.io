function test(){
let nom=prompt("Quel est le nom que tu veux ajouter dans la description")
let mdp=prompt("Quel est le mot de passe que tu veux mettre")
localStorage.setItem(nom);
localStorage.setItem(mdp)
let A1=document.getElementById("AN").innerHTML=nom
let A2=document.getElementById("AG").innerHTML=mdp
}


function connexion(){
  let noms=prompt("Quel est ton nom?")
  let mdps=prompt("Quel est ton mot de passe?")
  if (noms===localStorage.getItem("nom") && mdps===localStorage.getItem("mdp")){
  alert('Connexion')
}
}
