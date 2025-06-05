let numJaEscolhido = []
let numEscolhido = gerarNumeroAleatorio()
console.log(numEscolhido)
let minas = 0
escreverNosDois('Jogo do Número Minado', 'Escolha um número de 1 a 10')

function escreverNosDois(texto1, texto2){
    let titulo = document.querySelector('h1')
    titulo.innerHTML = texto1
    let paragrafo = document.querySelector('p')
    paragrafo.innerHTML = texto2
}

function escreverNaTela(selecao, texto){
    let escrita = document.querySelector(selecao)
    escrita.innerHTML = texto
}

function verificarChute(){
    let chute = document.querySelector('input').valueAsNumber
    if (numJaEscolhido.includes(chute)){
        escreverNosDois('Perdeu!', 'Você chutou uma mina')
        document.querySelector('button').setAttribute('disabled', true)
    }else{
        if (chute == numEscolhido){
            minas++
            escreverNosDois('Você Acertou!', 'Aperte "Continuar" para prosseguir')
            document.getElementById('continuar').removeAttribute('disabled')
        } else{
            if (chute > numEscolhido){
                escreverNaTela('p', 'O número é menor')
            } else{
                escreverNaTela('p', 'O número é maior')
            }
            limparCampo()
        }
    }
}

function continuarJogo(){
    limparCampo()
    numJaEscolhido.push(numEscolhido)
    let contadorDeMinas = minas + '/10'
    escreverNaTela('h1', contadorDeMinas)
    if (minas == 1){
        escreverNaTela('p', 'O último número achado virou uma mina, cuidado!')
    } else if (minas < 10){
        escreverNaTela('p', 'Você lembra onde todas as minas estão?')
    } else{
        escreverNaTela('p', 'Você conseguiu!')
    }
    document.getElementById('continuar').setAttribute('disabled', true)
    if (numJaEscolhido.length == 10){
        document.querySelector('button').setAttribute('disabled', true)
        setInterval(escreverNosDois('Parabéns', 'Você desarmou todas as minas'), )
    }
    numEscolhido = gerarNumeroAleatorio()
    console.log(numEscolhido)
    console.log(numJaEscolhido)
}

function gerarNumeroAleatorio(){
    let novoNumero = Math.trunc(Math.random() * 10 + 1)
    if (numJaEscolhido.includes(novoNumero)){
        return gerarNumeroAleatorio()
    } else{
        return novoNumero
    }
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}