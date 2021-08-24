const spansquery = document.querySelectorAll('span');
console.trace(spansquery)


// const spansget = document.getElementsByTagName('span');
// console.log(spansget)

function generateQualira() {

    const monkeyName = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer', 'Leònidas', 'Menino Neitan', 'Felipão V1D4 L0K4'];

    const randomMonkeyName = monkeyName[(Math.random() * monkeyName.length) | 0]
    document.querySelector('[randomName]').innerText = randomMonkeyName

    const randomNumber = (Math.random() * 101)
    const roundNumber = parseFloat(randomNumber.toFixed(0))
    const testosteroneLevel = (Math.random() * 1000)
    const roundTestosterone = parseFloat(testosteroneLevel.toFixed(0))

    if (roundNumber > 51) {

        document.querySelector('[randomNumber]').innerText = `Você é um FUCKINNNN QUALIRA, com ${roundNumber}% de qualiragem`

    } else if (testosteroneLevel < 249) {

        document.querySelector('[randomNumber]').innerText = `Melhore sua testosterona, quase virou um qualira!!!`

    }

    else {

        document.querySelector('[randomNumber]').innerText = `Você não é um qualira, você tem mais de ${roundTestosterone} de testosterona`
    }

}

function myfunction(){

    var x = 1024; //min value
	var y = 9999; // max value

	var deg = Math.floor(Math.random() * (x - y)) + y;

	document.getElementById('box').style.transform = "rotate("+deg+"deg)";

	var element = document.getElementById('mainbox');
	element.classList.remove('animate');
	setTimeout(function(){
		element.classList.add('animate');
	}, 5000);
}

generateQualira()

// Cair confete ao aparecer o nome
// Tocar musica I Will Survive


