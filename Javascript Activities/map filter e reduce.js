//Exercicio 1

console.log('Exercicio 1')


const maca = {
    value : 2
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return  item * this.value
    }, thisArg)
}

let nums  = [1, 2]

console.log(mapComThis(nums, laranja))


console.log('---------------------')

//Exercicio 2
console.log('Exercicio 2')

function getDobro(arr){
    return arr.map((n) => n * 2)
}

nums = [2, 3, 3, 5]

console.log(getDobro(nums))

console.log('---------------------')


//Exercicio 3

console.log('Exercicio 3')

nums = [2, 3, 4, 5, 6]

function filtraPares(arr){
    return arr.filter(item => item % 2 == 0);
}


console.log(filtraPares(nums))

console.log('---------------------')

//Exercicio 4

console.log('Exercicio 4')

nums = [1, 2, 3, 4, 5]

function somaNumeros(arr){
    return arr.reduce((p, c) => {
        return p + c
    }, 0);
}

console.log(somaNumeros(nums))