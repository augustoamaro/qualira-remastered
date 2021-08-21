

function generateQualira() {
    const monkey = ['Pira Kids', 'Anatoile', 'KratosPhp', 'Lucão do Java', 'Señor Developer', 'Leònidas', 'Menino Neitan', 'Felipão V1D4 L0K4'];


    const random = monkey[(Math.random() * monkey.length) | 0]
    document.querySelector('[random]').innerText = random

}

generateQualira()


// Criar os nomes
// Atribuir valores numéricos maior que 10.000 aleatório aos nomes
// Sortear a combinação dos dois
// Mostrar o resultado

