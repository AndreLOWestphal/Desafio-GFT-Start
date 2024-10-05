class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    classificarAtaquePorTipo(){
        if(this.tipo == "mago"){
            return"magia"
        }else if(this.tipo == "guerreiro"){
            return"espada"
        }else if(this.tipo == "monge"){
            return"artes marciais"
        }else{
            return"shuriken"    
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.classificarAtaquePorTipo()}.`)
    }
}

let andre = new Heroi("André", 15, "mago")
andre.atacar()