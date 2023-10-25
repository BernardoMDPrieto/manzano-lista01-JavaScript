//Contabilzar os votos de 3 candidatos
var candidatoA = parseInt(prompt("Quantos votos o candidato A teve?"))
var candidatoB = parseInt(prompt("Quantos votos o candidato B teve?"))
var candidatoC = parseInt(prompt("Quantos votos o candidato C teve?"))
var votosNulos = parseInt(prompt("Informe a quantidade de votos nulos"))
var votosBrancos = parseInt(prompt("Informe a quantidade de votos brancos"))
var votosTotais = candidatoA+candidatoB+candidatoC+votosBrancos+votosNulos
var votosValidos = candidatoA+candidatoB+candidatoC+votosBrancos
var percentualVotosA = (candidatoA/votosValidos)*100
var percentualVotosB = (candidatoB/votosValidos)*100
var percentualVotosC = (candidatoC/votosValidos)*100
var percentualVotosBrancos = (votosBrancos/votosTotais)*100
var percentualVotosNulos = (votosNulos/votosTotais)*100
alert(`A quantidade total de eleitores foi de: ${votosTotais} \n O candidato A teve ${percentualVotosA}% dos 
votos \n O candidatoB teve ${percentualVotosB}% dos votos \n O candidato C teve ${percentualVotosC}% dos votos \n
O total de votos em branco foi de ${percentualVotosBrancos}% \n O total de votos nulos foi de ${percentualVotosBrancos}%`)