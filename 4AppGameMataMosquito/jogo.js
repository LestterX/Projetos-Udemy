var largura = 0
var altura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search.replace('?', "") //RECUPERA APENAS O QUE TEM APÓS ? NO LINK HTTPS

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
    var criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    var criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){

    //remover mosquito anterior caso exista

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        console.log('Elemento selecionado foi: v' + vidas)
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png'
        vidas ++
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX  // POR CONTA DO -90 O MOSQUITO PODE APARECER FORA DA TELA ( 0-90 )
    posicaoY = posicaoY < 0 ? 0 : posicaoY  // QUE PARA ISSO NÃO PODEMOS DEIXAR CHEGAR ABAIXO DE 0 ( -90 )
    
    console.log(posicaoX, posicaoY)
    
    var mosquito = document.createElement('img')
    mosquito.src = './imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}