var numSort = []
var numDig = []

function sorteioNum(){
    if(numDig.length < 6 ){
        alert("Antes de sortear, digite 6 números dos campos.")
    }else{
    numSort = []
    do {
        let sort = Math.ceil(Math.random()*60)
        if(!numSort.includes(sort))
        numSort.push(sort)
    } while (numSort.length<6)

    document.getElementById("num-sort").innerHTML = numSort
    
    console.log(numSort)

    verificaAcertos()
    }
}

function getNum(valor, pos){
    valor = Number(valor)
    if(valor>60){
        alert("O valor é maior que 60.")
        limpar(pos)
    }else if(valor<=0){
        alert("O valor não pode ser menor ou igual a 0.")
        limpar(pos)
    }else if(numDig.includes(valor)){
        alert("O valor já foi digitado.")
        limpar(pos)
    }else{
        numDig[pos] = valor
    }
}

function limpar(pos){
    document.getElementById(`num${pos}`).value = ''
}

function verificaAcertos(){
    let cont=0
    numDig.forEach(function(valor, index){
        if(numSort.includes(valor)){
            cont = cont + 1
        }
    })
    document.getElementById("total").innerText = cont
}
