const displayres = document.getElementById('display');
const lengthEL = document.querySelector('#length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const easybtn = document.getElementById('easybtn')
const midbtn = document.getElementById('mediam')
const hardbtn = document.getElementById('hardbtn')

const randonfun = {
    upper: getuppercase,
    lower: getlowercase,
    number: getnumbers,
    symbol: getsymbols
};

generateEL.addEventListener("click", () => {
    const haslength = +lengthEL.value;
    const hasuppercase = uppercaseEL.checked;
    const haslowercase = lowercaseEL.checked;
    const hasnumber = numbersEL.checked;
    const hassymbols = symbolsEL.checked;
    displayres.value = generatepasswoard(hasuppercase, haslowercase, hasnumber, hassymbols, haslength)
});


function generatepasswoard(upper, lower, number, symbol, length) {
    let generatedpasswoard = "";
    const typecount = upper + lower + number + symbol;
    const typearr = [{ upper }, { lower }, { number }, { symbol }].filter(
        item =>  Object.values(item)[0]
    );

    if (typecount === 0) {
        return '';
    }

    else if (typearr.length <= 2) {
        easybtn.style.color = ' #1c9cdb';
        easybtn.style.fontWeight = '600';

        midbtn.style.color = 'white';
        midbtn.style.fontWeight = '400';
        hardbtn.style.color = 'white';
        hardbtn.style.fontWeight = '400';
    }

    else if (typearr.length == 3) {
        midbtn.style.color = '#2fdb2f';
        midbtn.style.fontWeight = '600';

        easybtn.style.color = 'white';
        easybtn.style.fontWeight = '400';
        hardbtn.style.color = 'white';
        hardbtn.style.fontWeight = '400';
    }

    else if (typearr.length == 4) {
        hardbtn.style.color = '#f11a1a';
        hardbtn.style.fontWeight = '600';
        
        midbtn.style.color = 'white';
        midbtn.style.fontWeight = '400';
        easybtn.style.color = 'white';
        easybtn.style.fontWeight = '400';
    }

    for (i = 0; i < length; i +=typecount) {
        typearr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedpasswoard += randonfun[funcName]();
        });
    }

    const finalpasswoard = shuffleArray(generatedpasswoard.slice(0, length).split('')).join('');
    console.log(finalpasswoard);
    return finalpasswoard;
}

function shuffleArray(array) { 
    return array.sort( ()=>Math.random()-0.5 );
 } 


function getlowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getuppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getnumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getsymbols() {
    let symblos = "!@#$%^&*()_+<>{}[]|-?";
    return symblos[Math.floor(Math.random() * symblos.length)]
}
