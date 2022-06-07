function verificaPalindromo(string){
    if(!string) return;

    return string.split('').reverse().join('') == string ? true : false;
}

console.log(verificaPalindromo('arara'))