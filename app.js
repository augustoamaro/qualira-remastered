function spinWheel() {
    const x = 1024;
    const y = 9999;
    const deg = Math.floor(Math.random() * (x - y)) + y;
    
    const rotate = document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function () {
        element.classList.add('animate');
    }, 5000);
    
    generateQualira()
    
}


function generateQualira() {
    
    const bs = document.querySelectorAll('[slice]')
    const monkeyName = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer', 'Leònidas', 'Menino Neitan', 'Felipão'];    

    monkeyName.forEach(function(el, index) {
        bs[index].innerHTML = el
    })

    const randomMonkeyName = monkeyName[(Math.random() * monkeyName.length) | 0]
    document.querySelector('[randomName]').innerText = randomMonkeyName

    const randomNumber = (Math.random() * 101)
    const roundNumber = parseFloat(randomNumber.toFixed(0))

    if (roundNumber > 51) {

        document.querySelector('[randomNumber]').innerText = `Você é um FUCKINNNN QUALIRA, com ${roundNumber}% de qualiragem`

    } else {

        document.querySelector('[randomNumber]').innerText = `Você não é um qualira, muito bem!`
    }

}


