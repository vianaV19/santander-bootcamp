const aluno = [
    {
        nome: 'sofia',
        nota: 9,
        turma: '1C'
    },
    {
        nome: 'carlos',
        nota: 8,
        turma: '4B'
    },
    {
        nome: 'joao',
        nota: 7,
        turma: '1F'
    },
    {
        nome: 'marcos',
        nota: 5,
        turma: '5C'
    }
]

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0 ; i < arr.length; i++) {
        const {nota, nome} = arr [i]

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(aluno, 6))