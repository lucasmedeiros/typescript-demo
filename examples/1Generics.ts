/**
 * Como em outras linguagens como Java e C#, Typescript permite que você faça uso de
 * tipos genéricos para API's que não tem tipos bem definidos ou consistentes, e é
 * uma boa prática utilizar ao invés do any.
 */

function identity<T>(value: T): T {
  return value;
}

interface Human {
  id: string
  name: string
}

const num = identity(43)

const human = identity<Human>({
  id: 'SOME-RANDOM-GENERATED-ID',
  name: 'Lucas',
})

// const error = identity<string>(12) // vai dar erro, pois o valor não é string
