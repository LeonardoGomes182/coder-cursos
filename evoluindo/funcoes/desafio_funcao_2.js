//(nota) => Conceito
//10(A+), 9(A), 8(B+), 7(B), 6(C+), 5(C), 4(D+), 3(D), 2(E+), 1(E), 0(F), null
// Math.ceil

function conceitoNota(nota){

    switch(Math.ceil(nota)){
        case 10: conceito = "A+" 
        break;
        case 9: conceito = "A"
        break;
        case 8: conceito = "B+"
        break;
        case 7: conceito = "B"
        break;
        case 6: conceito = "C+"
        break;
        case 5: conceito = "C"
        break;
        case 4: conceito = "D+"
        break;
        case 3: conceito = "D"
        break;
        case 2: conceito = "E+"
        break;
        case 1: conceito = "E"
        break;
        case 0: conceito = "F"
        break;
        default: conceito = null
            
    }
    return conceito
}


const conceitoAluno = conceitoNota(6.9)
console.log(`O conceito do aluno é: ${conceitoAluno} `)

//outra forma

function conceitoNota2(nota){
    switch(Math.ceil(nota)){
        case 10: return "A+"
        case 9: return "A"
        case 8: return "B+"
        case 7: return "B"
        case 6: return "C+"
        case 5: return "C"
        case 4: return "D+"
        case 3: return "D"
        case 2: return "E+"
        case 1: return "E"
        case 0: return "F"
        default: return null
    }

}
const conceitoAluno2 = conceitoNota2(6.9)
console.log(`O conceito do aluno é: ${conceitoAluno2} `)