function plural(substantiv, numar) {
    let pluralForm;

   
    if (substantiv === "sheep") {
        pluralForm = "sheep";
    } else if (substantiv === "goose" && numar <= 1) {
        pluralForm = "geese";
    } else if (substantiv === "goose" && numar > 1) {
        pluralForm = "goose";
    } else {
        pluralForm = numar <= 1 ? substantiv : substantiv + "s";
    }

   
    return `I have ${numar} ${pluralForm}`;
}


// console.log(plural("pig", 6));      
// console.log(plural("hamster", 0));  
// console.log(plural("parrot", 1));  
// console.log(plural("sheep", 1));    
// console.log(plural("sheep", 4));    
// console.log(plural("goose", 1));    
// console.log(plural("goose", 9));    





function calculeazaVarsta(anulNasterii) {
    const anulCurent = new Date().getFullYear();
    return anulCurent - anulNasterii;
}

function varstaPensionare(isF) {
    return isF ? 64 : 67;
}


function verificaPensionare(nume, anulNasterii, isF) {
    const varsta = calculeazaVarsta(anulNasterii);
    const varstaDePensionare = varstaPensionare(isF);
    
    if (varsta >= varstaDePensionare) {
        console.log(`${nume} este deja la pensie.`);
    } else {
        const aniPanaLaPensionare = varstaDePensionare - varsta;
        console.log(`${nume} mai are ${aniPanaLaPensionare} ani până la pensionare.`);
    }

    if (varsta < 18) {
        console.log(`${nume} este minor(ă).`);
    }
}

let nume = "Sergiu";
let anulNasterii = 1979;
let isF = false; 

verificaPensionare(nume, anulNasterii, isF);

// nume = "Anastasia";
// anulNasterii = 1963;
// isF = true; 

// verificaPensionare(nume, anulNasterii, isF);

// nume = "Andreea";
// anulNasterii = 2010;
// isF = true; 

// verificaPensionare(nume, anulNasterii, isF);