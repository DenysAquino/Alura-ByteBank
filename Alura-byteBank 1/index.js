import {Cliente} from './cliente.js'
import {ContaCorrente} from './contaCorrente.js'

const cliente1 = new Cliente( 'Ricardo', 123456789);

const cliente2 = new Cliente( 'Alice', 234567890);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500)
const conta2 = new ContaCorrente(102, cliente2)

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2)


console.log(ContaCorrente.numeroDeContas)
