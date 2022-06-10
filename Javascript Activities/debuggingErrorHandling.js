function valida(arr, num){

    try {
        if(!arr || !num) throw new ReferenceError('Invalid Parameters');

        if(typeof arr !== 'object') throw new TypeError('Array must be an object');
    
        if(typeof num !== 'number') throw new TypeError('Num must be a number!');
    
        if(arr.length != num) throw new RangeError('Array Length and num must be equals!');
    }catch(e){
        if(e instanceof ReferenceError){
            console.log('Reference Error')
        }else if(e instanceof TypeError){
            console.log('Type Error')
        }
        else if(e instanceof RangeError){
            console.log('Type Error')
        }else{
            console.log('Error unrecognized!')
        }
    }
   
    
}

const arr = [1, 2, 3, 4 ]

let num = 2

console.log(valida(2, 3))