const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let acertos = 0

leitor.question('Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n Sua resposta é:', (r1) => {
    const r1Certa = 'function'
    if (r1 == r1Certa){
        console.log('Você acertou!')
        acertos++
    }
    else{
        console.log('Você errou!')
    }

    leitor.question('Qual dessas estruturas é de repetição?\n(a) loopar\n(b) repeat\n(c) for\n Sua resposta é:', (r2) => {
        const r2Certa = 'for'
        if (r2 == r2Certa){
            console.log('Você acertou!')
            acertos++
        }
        else{
            console.log('Você errou!')
        }
    
        leitor.question('Qual valor é considerado false em javascript?\n(a) 1\n(b) 0\n(c) "texto"\n Sua resposta é:\n', (r3) => {
            const r3Certa = '0'
            if (r3 == r3Certa){
                console.log('Você acertou!')
                acertos++
            }
            else{
                console.log('Você errou!')
            }

            leitor.close()

            if(acertos == 3){
                console.log('Parabéns, você acertou todas!')
            }
            else if(acertos == 2){
                console.log('Você acertou 2, muito bom! continue assim!')
            }
            else if(acertos == 1){
                console.log('Você acertou 1, muito bom! continue melhorando!')
            }
            else{
                console.log('Você errou todas, continue praticando.')
            }
        })
    })

})

