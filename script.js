function test(){
let nom=prompt("Quel est le nom que tu veux ajouter dans la description")
let mdp=prompt("Quel est le mot de passe que tu veux mettre")
localStorage.setItem("nom", nom);
localStorage.setItem("mdp", mdp)
localStorage.getItem("nom")
localStorage.getItem("mdp")
let A1=document.getElementById("AN").innerHTML=nom
let A2=document.getElementById("AG").innerHTML=mdp
}
