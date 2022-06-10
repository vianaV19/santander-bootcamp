class ContaBancaria {

    constructor(agencia, numero, saldo) {
        this._saldo = saldo
        this.agencia = agencia
        this.numero = numero
        this.tipo;
    }

    get saldo() {
        return this.saldo
    }

    set saldo(saldo) {
        this.saldo = saldo
    }


    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operacao Negada'
        }

        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor

        return this._saldo
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo)

        this._cartaoDeCredito = 0
        this.tipo = 'Conta Corrente'
    }

    set cartaoDeCredito (valor){
        this._cartaoDeCredito = valor
    }

    get cartaoDeCredito() {
        return this._cartaoDeCredito
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        
        this.tipo = 'poupanca'
    }
}

class ContaUniversitara extends ContaBancaria 
{
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo)
        
        this.tipo = 'Universitaria'
    }

    sacar(valor){
        if(valor > 500) return 'Operacao Negada'

        this._saldo -= valor

        return this._saldo
    }
}