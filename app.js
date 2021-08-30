function spinWheel() {
    const x = 1024;
    const y = 9999;
    const deg = Math.floor(Math.random() * (x - y)) + y;
    
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    
    // const element = document.querySelector('[arrow]');
    // element.classList.remove('animate');
    // setTimeout(function () {
    //     element.classList.add('animate');
    // }, 5000);
    
    generateQualira()
    
}


function generateQualira() {
    
    const slice = document.querySelectorAll('[slice]'); // Pega todos elementos b
    const monkeyName = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão', 'Salazar', 'Leònidas', 'Neitan', 'Felipão']; // Array de string contendo os nomes 

    monkeyName.forEach((el, index) => { // Percorre todos os nomes, e para cada elemento b, adiciona o nome na posição correspondente
        slice[index].innerHTML = el
    });

    const arrow = document.querySelector('[arrow]');

    
    // console.log(arrow);

    // const randomMonkeyName = monkeyName[(Math.random() * monkeyName.length) | 0]
    // document.querySelector('[randomName]').innerText = randomMonkeyName

    // const randomNumber = (Math.random() * 101)
    // const roundNumber = parseFloat(randomNumber.toFixed(0))

    // if (roundNumber > 51) {

    //     document.querySelector('[randomNumber]').innerText = `Você é um FUCKINNNN QUALIRA, com ${roundNumber}% de qualiragem`

    // } else {

    //     document.querySelector('[randomNumber]').innerText = `Você não é um qualira, muito bem!`
    // }

}


