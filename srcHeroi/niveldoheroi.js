//criando atributos/variaveis e dando valores
let nomeHeroi;
let xpHeroi;
let nvlHeroi;
let hpHeroi;
let tierHeroi;

nomeHeroi = "Alvo Master";
xpHeroi = 13000;
tierHeroi = xpHeroi;
hpHeroi = (xpHeroi/7).toFixed(2);

// funções/metodos
function verificarNivelHeroi(){

    //tem por objetivo verificar o nvl do heroi usando if
    if(xpHeroi <= 1000){
        return "Nivel 10"
    }else if(xpHeroi >= 1001 && xpHeroi <= 2000){
        return "Nivel 20"
    }else if(xpHeroi >= 2001 && xpHeroi <= 3000){
        return "Nivel 30"
    }else if(xpHeroi >= 3001 && xpHeroi <= 4000){
        return "Nivel 40"
    }else if(xpHeroi >= 4001 && xpHeroi <= 5000){
        return "Nivel 50"
    }else if(xpHeroi >= 6001 && xpHeroi <= 7000){
        return "Nivel 60"
    }else if(xpHeroi >= 7001 && xpHeroi <= 8000){
        return "Nivel 70"
    }else if(xpHeroi >= 8001 && xpHeroi <= 9000){
        return "Nivel 80"
    }else if(xpHeroi >= 9001 && xpHeroi <= 10000){
        return "Nivel 90"
    }else{
        return "Nivel 100"
    }
}

function verificarTierHeroi(){

    // verificar nvl do heroi utilizando switch
    switch(tierHeroi){
        case tierHeroi <= 1000:
            return "ferro"
        break;
        case tierHeroi <= 1001 && tierHeroi <= 2000:
            return "bronze"
        break;
        case tierHeroi <= 2001 && tierHeroi <= 3000:
            return "prata"
        break;
        case tierHeroi <= 3001 && tierHeroi <= 4000:
            return "ouro"
        break;
        case tierHeroi <= 4001 && tierHeroi <= 5000:
            return "platina"
        break;
        case tierHeroi <= 5001 && tierHeroi <= 6000:
            return "esmeralda"
        break;
        case tierHeroi <= 6001 && tierHeroi <= 7000:
            return "diamante"
        break;
        case tierHeroi <= 7001 && tierHeroi <= 8000:
            return "mestre"
        break;
        case tierHeroi <= 8001 && tierHeroi <= 9000:
            return "gran-mestre"
        break;
        case tierHeroi <= 9001 && tierHeroi <= 10000:
            return "desafiante"
        break;
        default:
            return "radiante"                  
    }
}


let nivelHeroiVerificado = verificarNivelHeroi()
let tierHeroiVerificado = verificarTierHeroi()
console.log("O Herói de nome " + nomeHeroi + 
            " com hp " + hpHeroi + 
            " e nivel " + nivelHeroiVerificado + 
            " está no tier " + tierHeroiVerificado + ".")
