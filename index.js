const namePersonagem = "Anny" //constante
let nivel = 8500 //variavel
let categoria = ""

for(let i = 0; i <= nivel; i++){
    
    if(i <= 1000 && i == nivel){
        categoria = "Ferro"

    }else if(i >= 1001 && i <= 2000){
        categoria = "Bronze"

    }else if(i >= 2001 && i <= 5000){
        categoria = "Prata"

    }else if(i >= 5001 && i <= 7000){
        categoria = "Ouro"
    
    }else if(i >= 7001 && i <= 8000){
        categoria = "Platina"
    
    }else if(i >= 8001 && i <= 9000){
        categoria = "Ascendente"
    
    }else if(i >= 9001 && i <= 10000){
        categoria = "Imortal"
    
    }else if(i >= 10001)
        categoria = "Radiante"
}

switch (categoria) {
    case "Ferro":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Bronze":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Prata":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break
        
    case "Ouro":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Platina":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Ascendente":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Imortal":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break

    case "Radiante":
        console.log("O Herói de nome " + namePersonagem + ", está no nivel " + categoria)
        break
}


