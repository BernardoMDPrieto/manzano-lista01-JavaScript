//Calcular a prestação de uma compra
var valor = parseFloat(prompt("Informe o valor da compra"))
var taxa = parseFloat(prompt("Informe a taxa sobre a compra"))
var tempo = parseFloat(prompt("Informe quantos meses essa compra ficará em aberta"))
var prestacao = valor + (valor*taxa/100)*(tempo*30)
alert(`A prestação da compra é de ${prestacao}`)