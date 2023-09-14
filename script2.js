const displayres = document.getElementById('display');
const lengthEL = document.querySelector('#length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const easybtn = document.getElementById('easybtn');
const midbtn = document.getElementById('mediam');
const hardbtn = document.getElementById('hardbtn');


const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_-+{}[]|<>?/"


generateEL.addEventListener("click", () => {
    displayres.value = generatepasswoard();
});

function resetDifficultyHighlights() {
    easybtn.style.color = 'white';
    easybtn.style.fontWeight = '400';
    midbtn.style.color = 'white';
    midbtn.style.fontWeight = '400';
    hardbtn.style.color = 'white';
    hardbtn.style.fontWeight = '400';
}

function generatepasswoard() {
    let generatedpasswoard = "";
    let types = "";
    types += uppercaseEL.checked ? uppercase : "";
    types += lowercaseEL.checked ? lowercase : "";
    types += numbersEL.checked ? number : "";
    types += symbolsEL.checked ? symbol : "";
    console.log(types)

    if (types === "" || types.length === 0) {
        return "hello";
    }

    if (lengthEL.value <= 8) {
        resetDifficultyHighlights();
        easybtn.style.color = '#1c9cdb';
        easybtn.style.fontWeight = '600';
        console.log("easy");
    }

    else if (8 < lengthEL.value && lengthEL.value < 14) {
        resetDifficultyHighlights();
        midbtn.style.color = '#2fdb2f';
        midbtn.style.fontWeight = '600';
        console.log("mediam");
    }

    else if (14 <= lengthEL.value) {
        resetDifficultyHighlights();
        hardbtn.style.color = '#f11a1a';
        hardbtn.style.fontWeight = '600';
        console.log("hard");
    }

    let i = 1;
    while (i <= lengthEL.value) {
        generatedpasswoard += types.charAt(Math.floor(Math.random() * types.length));
        i++;

    }

    return generatedpasswoard;
}
