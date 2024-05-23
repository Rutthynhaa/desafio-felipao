// Criar variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let nomeHeroi = "Ruth3llen"
let xpHeroi = 9000

//Utilizar uma estrutura de decisão para apresentar a mensagem contendo o nível do Heroi. 
//Usei a estrutura condicional switch case.
switch (xpHeroi) {
    case (xpHeroi < 1000):
     Console.log ("Ferro");
     break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
     console.log("Bronze");
     break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
     console.log("Prata");
     break;
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
     console.log("Ouro");
     break;
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
     console.log("Platina");
     break;
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
     console.log("Ascendente")
     break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
     console.log("Imortal");
     break;
    case (xpHeroi >= 10001 ):
     console.log("Radiante");
     break;
    default:
     console.log("Xp inválido") 

}
    Console.log("O Herói " + nomeHeroi + "está no nível " + xpHeroi)
