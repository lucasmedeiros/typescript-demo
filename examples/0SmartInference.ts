/**
 * A linguagem possui um grande poder de inferência, que podemos usar a nosso 
 * favor.
 */

let a = "a"
// a = 3 // vai ocasionar erro

let b: string
b = "b" // funciona perfeitamente

let c
c

c = "c"
c

c = 3 // funciona perfeitamente
c

const computer = {
  name: "Computador",
  serial: 101023
}

/**
 * Typescript adiciona um "superpoder" para o 'typeof', que retorna o tipo
 * que a linguagem infere para um objeto
 */

type Computer = typeof computer

const notebook: Computer = {
  name: "Notebook",
  serial: 101024
}

const macbook: Computer = {
  name: "Macbook",
  serial: 101025
}

/**
 * A linguagem também provê o 'keyof'
 */

type NumericalKeyObject = { [n: number]: unknown }
const numericalKeyObject: NumericalKeyObject = {
  1: 1,
  2: "lalala",
  3: {
    a: 'a',
    b: 'b',
    c: 'c'
  },
  // prop: 'error' // vai ocasionar erro, pois o tipo da chave não é number
}
type A = keyof NumericalKeyObject // number

type StringKeyObject = { [k: string]: boolean }
const stringKeyObject: StringKeyObject = {
  a: true,
  b: false,
  // c: 'error', // vai ocasionar erro, pois o tipo do valor é boolean
  // 10: false, // vai ocasionar erro, pois o tipo da chave não é string
}
type B = keyof StringKeyObject // string

type StringNumericalKeyObject = { [k: string | number]: unknown }
const stringNumericalKeyObject: StringNumericalKeyObject = {
  a: "ok",
  2: "ok",
  b: {
    ok: "ok"
  },
  3: {
    ok: "ok"
  }
}
type C = keyof StringNumericalKeyObject // string | number

const ex1: C = 'a'
const ex2: C = 2
// const ex3: C = {
//   a: "error"
// } // vai ocasionar erro, pois não é string nem number
