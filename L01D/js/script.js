//Calcular os litros usados por um carro em uma viagem
var tempo = parseFloat(prompt("Informe o tempo da viagem:"))
var velocidade = parseFloat(prompt("Informe a velocidade média"))
var distancia = tempo*velocidade
var litrosUsados = distancia/12
alert(`O tempo de viagem foi de: ${tempo} \n A velocidade média da viagem foi: ${velocidade} \n A distância percorrida foi: ${distancia} \n Foram usados: ${litrosUsados}L de gasolina`)