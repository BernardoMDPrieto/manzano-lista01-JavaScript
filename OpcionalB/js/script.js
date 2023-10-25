//Apresentar o reajuste salárial de um funcionário
var salarioMensal = parseFloat(prompt("Informe o seu salário mensal"))
var percentuaReajuste = parseInt(prompt("Informe o percentual de reajuste"))
var novoSalario = salarioMensal+(salarioMensal*(percentuaReajuste/100))
alert(`O novo salário é de ${novoSalario}`)