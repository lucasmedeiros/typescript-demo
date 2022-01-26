/**
 * 'Exclude' te permite excluir membros de um UnionType.
 */

interface Dog {
  dogName: string
}

interface Cat {
  catName: string
}

interface Monkey {
  monkeyName: string
}

type Animal = Dog | Cat | Monkey
type DogOrMonkey = Exclude<Animal, Cat>

const dogOrMonkey: DogOrMonkey = {
  dogName: 'auau',
  monkeyName: 'makako',
  // catName: 'error' // vai ocasionar erro
}

/**
 * 'Extract' te permite extrair um UnionType de um determinado tipo ou união.
 */

type T0 = Extract<"a" | "b" | "c", "a" | "f">
const exampleT0: T0 = "a" // valores como "f", "b" ou "c" vão ocasionar erro

type T1 = Extract<string | number | (() => void), Function | number>

const exampleT1: T1 = function () {
  /* Do something! */
}
const example2T1: T1 = 3
// const example3T1: T1 = "error" // vai ocasionar erro, pois string não está inclusa na seleção
