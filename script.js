let chaptersObj = {
    Debut: {
        subtitle: "Le réveil",
        text: "Vous ouvrez vos yeux, un énorme mal de tête vous éveille par force. Une main sur le front pour vous soulager temporairement la douleur, vous vous relevez avant d'observer la pièce autour de vous. La première chose que vous remarquez s'agit de la porte derrière vous.",
        img: "maison.png",
        options: [
            {optionText: "Approcher de la porte", action: "goToChapter('Porte_Choix')"},
        ]
    },
    Porte_Choix: {
        subtitle: "La porte",
        text: "C'est une porte large, brune et en bois. Essayez-vous de l'ouvrir?",
        img: "maison.png",
        options: [
            {optionText: "L'ouvrir", action: "goToChapter('Porte_Oui')"}, 
            {optionText: "Le garder fermé", action: "goToChapter('Investiguer_Choix')"}, 
            {optionText: "Utiliser la clé", action: "goToChapter('Porte_Cle')"},
        ] 
    },
    Porte_Oui: {
        subtitle: "Oups...",
        text: "En tirant sur la poignée, elle s'enlève de la porte d'un coup. Les vis sont toutes rouillées et cassées, et sans outil, il est impossible de le réparer. Bon, tant qu'a y être, vous gardez la poignée de porte avec vous.",
        img: "maison.png",
        options: [
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"},
        ]
    },
    Investiguer_Choix: {
        subtitle: "Investigation",
        text: "Ceci est le salon. Où aimeriez-vous jeter un coup d'oeil?",
        img: "maison.png",
        options: [
            {optionText: "La lampe", action: "goToChapter('Lampe_Choix')"}, 
            {optionText: "Le canapé", action: "goToChapter('Canape_Choix')"}, 
            {optionText: "La commode", action: "goToChapter('Commode_Choix')"}, 
            {optionText: "La porte", action: "goToChapter('Porte_Choix')"},
        ] 
    },
    Lampe_Choix: {
        subtitle: "La lampe",
        text: "C'est une lampe sans interrupteur. Le fil est derrière une table trop lourde pour être bougée.",
        img: "maison.png",
        options: [
            {optionText: "Éteindre l'ampoule", action: "goToChapter('Lampe_Oui')"}, 
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },
    Lampe_Oui: {
        subtitle: "On éteint!",
        text: "Vous brandissez la poignée de porte et vous fracassez l'ampoule. La pièce est devenue beaucoup plus sombre, mais hereusement la faible lumière de la chandelière au-dessus de votre tête illumine toujours votre entourage.",
        img: "maison.png",
        options: [
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },
    Canape_Choix: {
        subtitle: "Le canapé",
        text: "C'est un canapé. Il a l'air confortable.",
        img: "maison.png",
        options: [
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },
    /*Canape_Oui: {
        subtitle: "Message caché",
        text: "Le manque de lumière vous permet de voir une série de caractères sur les coussins du canapé. Pourrait-elle être utilisé quelque part?",
        img: "maison.png",
        options: [
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },*/
    Commode_Choix: {
        subtitle: "La commode",
        text: "C'est une commode. Le premier tirroir est verouillé, seul un code à quatre chiffres peut le déverouiller.",
        img: "maison.png",
        options: [
            {optionText: "Insérer le code", action: "goToChapter('Inserer_Code')"}
        ] 
    },
    Inserer_Code: {
        subtitle: "Veuillez insérer le code",
        text: "Utilisez le clavier si-dessous pour entrer le code d'accès.",
        img: "maison.png",
        options: [
            {optionText: "Soumettre", action: "goToChapter('Commode_Oui')"}, 
            /*{optionText: "Incorrect", action: "goToChapter('Commode_Non')"}, */
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },
    Commode_Oui: {
        subtitle: "Correct!",
        text: "Bzzt! Le tirroir est déverouillé. Vous l'ouvrez et vous retrouvez une clé à l'intérieur que vous gardiez sur vous.",
        img: "maison.png",
        options: [
            {optionText: "Retour", action: "goToChapter('Investiguer_Choix')"}
        ] 
    },
    /*Commode_Non: {
        subtitle: "Incorrect!",
        text: "On dirait que le code n'a pas fonctionné. Auriez-vous appuyé sur une mauvaise touche?",
        img: "maison.png",
        options: [
            {optionText: "Réinsérer le code", action: "goToChapter('Inserer_Code')"}, 
            {optionText: "Retourner au salon", action: "goToChapter('Investiguer_Choix')"}
        ] 
    }, */
    Porte_Cle: {
        subtitle: "Liberté",
        text: "Vous insérez la clé dans la serrure de la porte. Vous la tournez et un clic vous signale  Ayant apris de vos erreurs, vous tirez la deuxième poignée lentement et, une fois que vous constatez qu'elle ne tombera pas à son tour, vous ouvrez la porte à toute vitesse!",
        img: "maison.png",
        options: [
            {optionText: "Suivant", action: "goToChapter('Homme')"}
        ] 
    },
    Homme: {
        subtitle: "L'homme",
        text: "Alors que vos yeux s'ajustent à la lumière, vous entendiez les pas lourds d'une personne sur le gazon. Une fois que votre vision c'est habitué à la luminosité de l'extérieur, vous voyez un homme marcher vers une voiture. Que faites-vous?",
        img: "maison.png",
        options: [
            {optionText: "L'assomer", action: "goToChapter('Assomer_Oui')"}, 
            {optionText: "L'observer", action: "goToChapter('Assomer_Non')"}
        ] 
    },
    Assomer_Oui: {
        subtitle: "Attaque!",
        text: "Vous brandissez la poignée de porte et vous assomez l'homme en frappant le derrière de sa tête. Il s'écroule au sol.",
        img: "maison.png",
        options: [
            {optionText: "Suivant", action: "goToChapter('Aller_Ou_Choix')"}
        ] 
    },
    Assomer_Non: {
        subtitle: "Si près...",
        text: "Vous regardez l'homme monter en voiture, démarrer le moteur avant de partir au loin avec le véhicule. Votre seul moyen de quitter cette  située au milieu de nul part vient de se glisser de vos mains.",
        img: "maison.png",
        options: [
            {optionText: "Recommencer", action: "goToChapter('Debut')"}
        ] 
    },
    Aller_Ou_Choix: {
        subtitle: "Que faire?",
        text: "Maintenant que l'homme inconnu est inconscient, qu'allez-vous faire?",
        img: "maison.png",
        options: [
            {optionText: "Quitter avec la voiture", action: "goToChapter('Voiture')"}, 
            {optionText: "Chercher le corps de l'homme", action: "goToChapter('Corps')"}
        ] 
    },
    Voiture: {
        subtitle: "La voiture",
        text: "Vous entrez dans la voiture et vous essayez de la démarrer... Mais vous n'avez pas les clés. Alors que vous cherchiez par panique dans tout les compartiments du véhicule pour les clés, la portière du conducteur s'ouvre soudainement et l'homme vous tire hors de la voiture par le col de votre chandail...",
        img: "maison.png",
        options: [
            {optionText: "Recommencer", action: "goToChapter('Debut')"}
        ] 
    },
    Corps: {
        subtitle: "Le corps",
        text: "Vous fouillez dans les poches de la veste de l'homme et vous y retirez une paire de clés.",
        img: "maison.png",
        options: [
            {optionText: "Quitter avec la voiture", action: "goToChapter('Fin')"}
        ] 
    },
    Fin: {
        subtitle: "Adieu",
        text: "Vous entrez dans la voiture et vous insérez la clé dans la serrure pour ensuite démarrer le véhicule. Dès que vous pouviez partir, vous appuyez sur la pédale et vous quittez à toute vitesse, juste à temps pour que l'homme dont vous avez assomé se relève au loin, où vous l'aviez laissé.",
        img: "maison.png",
        options: [
            {optionText: "Fin", action: "goToChapter('Debut')"}
        ] 
    },
};

function goToChapter(chapterName) {
    document.querySelector(".title").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".text").innerHTML = chaptersObj[chapterName]["text"];
    document.querySelector(".image").innerHTML = '<img src="../assets/images/' + chaptersObj[chapterName]["img"] + '">'
    

    //essaye de changer pour ne pas copier jazzy
    let optionsDiv = document.querySelector('.options');
    optionsDiv.innerHTML = ""
    for(element of chaptersObj[chapterName]["options"]){
        let boutonsChoix = document.createElement("button")
        boutonsChoix.setAttribute("onclick",element["action"])
        boutonsChoix.setAttribute("type", "button")
        let boutonsTexte = document.createTextNode(element["text"])
        boutonsChoix.appendChild(boutonsTexte)
        optionsDiv.appendChild(boutonsChoix)
    }

    /*let optionsDiv = chaptersObj[chapterName]["options"];
    optionsDiv.forEach(function(optionsFunction) {
        console.log(optionsFunction)
    });        
    document.querySelector(".button").innerHTML = (chaptersObj[chapterName]["options"]["optionText"]);
    function functionAction() {
        console.log("allo")
    } */

};