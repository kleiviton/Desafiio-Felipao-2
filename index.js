function calcularNivel(vitorias, derrotas){

let saldoVitorias = vitorias - derrotas;
let nivel = "";

  if(vitorias <= 10){ 
  nivel = "Ferro";
  
  }else if (vitorias >= 11 && vitorias <= 20){
  nivel = "Bronze";
  
  }else if (vitorias >= 21 && vitorias <= 50){
  nivel = "Prata";
  
  }else if (vitorias >= 51 && vitorias <= 80){
  nivel = "Ouro";
  
  }else if (vitorias >= 81 && vitorias <= 90){
  nivel = "Diamante";
  
  }else if (vitorias >= 91 && vitorias <= 100){
  nivel = "Lendário"; 
  
  }else{
  nivel = "imortal";}
  
  return {saldo: saldoVitorias, nivel: nivel};
  }
  
const testeJogadores = [
  {vitorias: 9, derrotas: 2},
  {vitorias: 15, derrotas: 5},
  {vitorias: 45, derrotas: 12},
  {vitorias: 75, derrotas: 20},
  {vitorias: 88, derrotas: 15},
  {vitorias: 95, derrotas: 30},
  {vitorias: 120, derrotas: 40}
  ];
  
  for(let i = 0; i < testeJogadores.length;i++){
  let jogador = testeJogadores[i];
  let resultado =  calcularNivel(jogador.vitorias, jogador.derrotas);
  
  console.log(`O herói tem o saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);
}