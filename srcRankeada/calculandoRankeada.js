
let wins;
let loss;

wins = 35;
loss = 12;

function calcularRanked(win, loss){
    let calculoRanked = calcularVitorias(win, loss)
    if(calculoRanked <= 10){
        return "Ferro"
    }else if(calculoRanked >= 11 && calculoRanked <= 20){
        return "Bronze"
    }else if(calculoRanked >= 21 && calculoRanked <= 50){
        return "Prata"
    }else if(calculoRanked >= 51 && calculoRanked <= 80){
        return "Ouro"
    }else if(calculoRanked >= 81 && calculoRanked <= 90){
        return "Diamante"
    }else if(calculoRanked >= 91 && calculoRanked <= 100){
        return "Lendário"
    }else{
        return "Imortal"
    }
}

function calcularVitorias(win, loss){
    let calculoResultadoVitorias = win - loss
    return calculoResultadoVitorias
}

let resultadoRanked = calcularRanked(wins, loss)
let resultadoVitorias = calcularVitorias(wins, loss)
console.log(`O Herói está com saldo de ${resultadoVitorias} Vitórias, e seu tier atual é ${resultadoRanked}.`)
