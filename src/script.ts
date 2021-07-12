let nomes: string[] = ['lucas', 'joao', 'luiz', 'fulano'];
//tem 2 formas de se declarar um array de numbers
let idade: number[] = [19,20,21,22];
let numeros: Array<number> = [1,2,3,4];
// -------------------------------------------------------------------------

// ele nao da erro de tipagem nesse push pois eu coloquei a tipagem como nay, ou qualquer coisa
//usado em ultimo recurso 
let coisas: any = ['lucas', 'pedro', 'joao'];
coisas.push(99)
// -------------------------------------------------------------------------

//como colocar o tipo do dado q a função vai receber
function firstLetterUpperCase(name: string){
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter+name.substring(1)
}

firstLetterUpperCase('lucas')
// -------------------------------------------------------------------------

//definindo o tipo do retorno de uma função
function soma (n1: number, n2: number): number {
    return n1 + n2;
}
let coisa = soma(90, 10)
// -------------------------------------------------------------------------

const nomes1 = ['lucas', 'pedro', 'joao', 'carlos', 90];

//nessa função ele nao da error pq eu faço uma verificação do nome ser uma string ou nao.
nomes1.forEach( function(nome){
    if(typeof nome === 'string'){
        console.log(nome)
    }else {
        console.log(nome)
    }
})
// -------------------------------------------------------------------------

//tipando os dados q viram no objeto
//o ponto de interrogação é pra ele perguntar se a propriedade é opcional  
function resumo (usuario: {nome: string, idade?: number}){
    if(usuario.idade !== undefined){
        return `Meu nome é ${usuario.nome} e minha idade é ${usuario.idade}.`
    }else {
        return `Meu nome é ${usuario.nome}`
    }
}

let u = {
    nome: ' lucas'
};

resumo(u)
// -------------------------------------------------------------------------

//o pipe | serve para eu poder dizer q age pode ser tanto string quanto number, logo sou obrigado a fazer uma verificação do tipo da variavel q chegar na func
function mostrarIdade (age: string | number){
    if(typeof age === 'string'){
        console.log(age.toUpperCase())
    }else{
        console.log(age)
    }
}

mostrarIdade(80);
mostrarIdade('80')
// -------------------------------------------------------------------------

//tipando os dados fora da função
type User = {
    id: string
    nickName: string
}

function res (user: User){
    return ` Olá ${user.nickName}, seu numero é ${user.id}`
}

res({
    id: '18907',
    nickName: 'lucas'
})
// -------------------------------------------------------------------------

//to dizendo q o idade é um input, logo ele tem um value pra ser mostrado.
let idadeField = document.getElementById('idade') as HTMLInputElement

console.log(idadeField.value)