/**
 * Record permite construir um tipo de objeto, em que os nomes/valores das propriedades não estão bem
 * definidos.
 */

interface ComplexObject extends Record<string, string> {
  title: string,
}

const complex: ComplexObject = {
  title: "Um título",
  createdAt: new Date().toISOString(), // funciona, pois é 'string'
  // anotherProperty: 2, // erro, pois 2 é do tipo 'number'
}

type ComplextObject2 = Record<string, string | number | ComplexObject>

const complex2: ComplextObject2 = {
  complex: {
    title: 'Complex object inside another'
  },
  value: 39,
  id: 'SOME-RANDOM-GENERATED-ID',
  // date: new Date() // erro, pois o tipo "Date" não está definido
}
