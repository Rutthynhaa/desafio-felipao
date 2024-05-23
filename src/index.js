// Criar variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let nomeHeroi = "Ruth3llen"
let xpHeroi = 9000

//Utilizar uma estrutura de decisão para apresentar a mensagem contendo o nível do Heroi. 
//Usei a estrutura condicional switch case.
let nivelHeroi;
switch (xpHeroi) {
    case xpHeroi < 1000:
     nivelHeroi = "Ferro";
     break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
     nivelHeroi = "Bronze";
     break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
     nivelHeroi = "Prata";
     break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
     nivelHeroi = "Ouro";
     break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
     nivelHeroi = "Platina";
     break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
     nivelHeroi = "Ascendente"
     break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
     nivelHeroi = "Imortal";
     break;
    default:
     nivelHeroi = "Radiante"

}
    console.log("O Herói " + nomeHeroi + " " + "está no nível " + xpHeroi)
