let numero = document.getElementById('inpNumero')
let resultado = document.getElementById('resultado')
function gerarTabuada(){
    let n = Number(numero.value)
    resultado.innerHTML = ''
    for(i=1; i<=10; i++){
        let multiplicacao = n * i
        resultado.innerHTML += n + "x" + i + "=" + multiplicacao + "<br>"
    }
}