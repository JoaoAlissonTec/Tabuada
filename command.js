function enviar(){
    var num = document.getElementById('num').value
    var result = document.getElementById('result')
    result.innerHTML = ''
    if(num.length == 0){
        alert('[ERRO] Digite um número.')
    }else{
        for(var a = 0; a <= 10; a++){
            var total = a * num
            result.innerHTML += `${num} x ${a} = ${total}<br>`
        }
    }
    
}
function limpar(){
    result.innerHTML = ''
}