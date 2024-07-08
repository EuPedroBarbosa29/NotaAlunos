let NotaDosEstudantes = prompt("Nome do estudante")

let notaUm = prompt("Digite a primeira nota")
let notaDois = prompt("Digite a segunta nota")

notaUM = Number(notaUm)
notaDois = Number(notaDois)

let avarage = (Number(notaUm) + Number(notaDois))  / 3 

let result = avarage > 7 

avarage = avarage.toFixed(2)

if(result){ 
 
  alert("Paranbes " + NotaDosEstudantes + " sua nota foi " + avarage )

} else if (avarage <3 ) {
  alert(" Que pena, " + NotaDosEstudantes +  "estude mais " + avarage)
} else {
  alert(" Que pena " + NotaDosEstudantes + " você foi reprovado ")
}