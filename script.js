function test() {
    let nom = prompt("Quel est le nom ?");
    let mdp = prompt("Quel est le mot de passe ?");

    localStorage.setItem(nom, mdp);

    document.getElementById("AN").innerHTML = nom;
    document.getElementById("AG").innerHTML = mdp;
}


function connexion() {
    let noms = prompt("Quel est ton nom ?");
    let mdps = prompt("Quel est ton mot de passe ?");

    if (localStorage.getItem(noms) === mdps) {
        alert("Connexion");
    } else {
        alert("Nom ou mot de passe incorrect");
    }
}
