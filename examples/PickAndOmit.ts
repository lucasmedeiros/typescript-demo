interface Entity {
  id: string
  name: string
  description: string
  value: string
}

/**
 * 'Pick' te permite *selecionar* atributos de um determinado tipo para utilizar em outro
 */

interface Person extends Pick<Entity, "id" | "name"> {
  age: number
  occupation: string
}

const person: Person = {
  id: "a-great-random-id-here",
  name: "Lucas de Medeiros",
  age: 23,
  occupation: 'Software Engineer',
  // value: "oops..." // vai ocasionar erro
}

/**
 * 'Omit' te permite *excluir* atributos de um determinado tipo para utilizar em outro
 */

type MyObject = Omit<Entity, "name">

const object: MyObject = {
  id: "another-great-random-id-here",
  description: "lalalalalala eu sou um objeto :)",
  value: "eu tenho valor!",
  // name: "eu não posso ter nome..." // vai ocasionar erro
}
