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
