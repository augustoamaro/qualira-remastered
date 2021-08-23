

function generateQualira() {
    const monkey = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer', 'Leònidas', 'Menino Neitan', 'Felipão V1D4 L0K4'];


    const randomName = monkey[(Math.random() * monkey.length) | 0]
    document.querySelector('[randomName]').innerText = randomName

    const randomNumber = (Math.random() * 101)
    const round = parseFloat(randomNumber.toFixed(0))

    const testosteroneLevel = (Math.random() * 1000)
    const roundTestosterone = parseFloat(testosteroneLevel.toFixed(0))

    if (round > 51) {

        document.querySelector('[randomNumber]').innerText = `Você é um FUCKINNNN QUALIRA \n com ${round}% de qualiragem`

    } else if (testosteroneLevel < 249) {

        document.querySelector('[randomNumber]').innerText = `Melhore sua testosterona, quase virou um qualira!!!`

    } 
    
    else {

        document.querySelector('[randomNumber]').innerText = `Você não é um qualira \n você tem mais de ${roundTestosterone} de testosterona`
    }

}

generateQualira()


// Criar os nomes
// Atribuir valores numéricos maior que 10.000 aleatório aos nomes
// Sortear a combinação dos dois
// Mostrar o resultado

