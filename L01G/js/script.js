//Aplicar a distributiva de 4 variáveis informadas pelo usuário
var variavelA = parseInt(prompt("Informe o valor da variável A"))
var variavelB = parseInt(prompt("Informe o valor da variável B"))
var variavelC = parseInt(prompt("Informe o valor da variável C"))
var variavelD = parseInt(prompt("Informe o valor da vairável D"))

var variavelABMultiplicada = variavelA*variavelB
var variavelACMultiplicada = variavelA*variavelC
var variavelADMultiplicada = variavelA*variavelD

var variavelABSomada = variavelA+variavelB
var variavelACSomada = variavelA+variavelC
var variavelADSomada = variavelA+variavelD

var variavelBCMultiplicada = variavelB*variavelC
var variavelBDMultiplicada = variavelB*variavelD

var variavelBCSomada = variavelB+variavelC
var variavelBDSomada = variavelB+variavelD

var variavelCDMultiplicada = variavelC*variavelD

var variavelCASomada = variavelC+variavelA
var variavelCBSomada = variavelC+variavelB
var variavelCDSomada = variavelC+variavelD

var variavelDAMultiplicada = variavelD*variavelA
var variavelDCMultiplicada = variavelD*variavelC

alert(`A multiplicação dos valores por A são: \n ${variavelABMultiplicada} \n ${variavelACMultiplicada} \n ${variavelADMultiplicada}`)
alert(`A multiplicação dos valores por B são: \n ${variavelABMultiplicada} \n ${variavelBCMultiplicada} \n ${variavelBDMultiplicada}`)
alert(`A multiplicação dos valores por C são: \n ${variavelACMultiplicada} \n ${variavelBCMultiplicada} \n ${variavelCDMultiplicada}`)
alert(`A multiplicação dos valores por D são: \n ${variavelDAMultiplicada} \n ${variavelBDMultiplicada} \n ${variavelCDMultiplicada}`)
alert(`A soma dos valores por A são: \n ${variavelABSomada} \n ${variavelACSomada} \n ${variavelADSomada}`)
alert(`A soma dos valores por B são: \n ${variavelABSomada} \n ${variavelBCSomada} \n ${variavelBDSomada}`)
alert(`A soma dos valores por C são: \n ${variavelCASomada} \n ${variavelCBSomada} \n ${variavelCDSomada}`)
alert(`A soma dos valores por D são: \n ${variavelADSomada} \n ${variavelBDSomada} \n ${variavelCDSomada}`)
