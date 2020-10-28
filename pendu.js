let listeMots = ["chat", "voiture", "groupe", "bateau", "cannette", "code", "souris", "route", "verre", "maillot", "ordinateur", "mirroir", "emablage", "cheveux", ];
let continuerPartie = "o";
let score = 0;

function mot_hasard(){
    let longueurListeMots = listeMots.length;
    let i = Math.floor(Math.random() * Math.floor(longueurListeMots));
    let motChoisi = listeMots[i];
    return motChoisi;
}

function nom_utilisateur(){
    let joueur;
    while (joueur = prompt("Tapez votre nom :")) {
        if (!isNaN(joueur)){
            alert("écris un nombre...");
        }else {
            return joueur;
        }
    }
}

function lettre_propose() {
    let lettre = prompt("Quelle est votre lettre ?");
    if (lettre >="a" && lettre <= "z" && lettre.length === 1){
        console.log('Veuillez proposer une lettre valide');
        return lettre;
    }else {
        return lettre_propose();
    }
}

function lettre_cachees(motEntier, lettreTrouvees){
    let masque = ""; 
    let lettreMotEntier;
    let longueurMot = motEntier.length;
    for (let i = 0; i < longueurMot ; i++){
        lettreMotEntier = motEntier[i];
        if (lettreTrouvees.includes(lettreMotEntier)){
            masque += lettreMotEntier;
        }else {
            masque += "_ ";
        }
    }
    return masque;
}

function jeu(){
    let joueur = nom_utilisateur();
    console.log("joueur " + joueur +":");
    let motATrouver = mot_hasard();

    while (continuerPartie != "n"){
        let lettreATrouver = [];
        for (let i = 0; i < motATrouver.length ; i++){
            if (!(lettreATrouver.includes(motATrouver[i]))){
                lettreATrouver.push(motATrouver[i]);
            }
        }        
        let nbrLettreDiff = lettreATrouver.length;
        let vie = 0;
        if (nbrLettreDiff >= 10){
            vie = 5;
        }else if (nbrLettreDiff >= 5){
            vie = 7;
        }else if (nbrLettreDiff < 5){
            vie = 10;
        }
        let point = nbrLettreDiff;
        let lettresTrouvees = [];
        let motTrouver = lettre_cachees(motATrouver, lettresTrouvees);
        let nbrVie = vie;
        while ((motATrouver != motTrouver) &&(nbrVie > 0)){
            console.log("Mot à trouver "+ motTrouver + " (encore "+ nbrVie +" chances.)")
            let lettre = lettre_propose();
            if (lettresTrouvees.includes(lettre)){
                vie -= 1;
                console.log("Vous avez déjà choisi cette lettre.")
            }else if (lettreATrouver.includes(lettre)){
                lettresTrouvees.push(lettre);
                console.log("bien joué");
            }else {
                nbrVie -= 1;
                console.log("non, malheureusement...")
            }
            motTrouver = lettre_cachees(motATrouver, lettresTrouvees);
        }
        if (motATrouver ==  motTrouver){
            score += point;
            console.log("Félicitations ! Vous avez trouvé le mot "+ motATrouver +". votre score est de "+ score +" point.")
        }else {
            score -= point;
            console.log("vous avez perdu... le mot à trouver était "+ motATrouver +". votre score est de "+ score +" point.")
        }

        continuerPartie = prompt("Souhaitez-vous continuer la partie (O/N) ?");
    }
}

function clique_pour_jeu(){
    jeu()
}