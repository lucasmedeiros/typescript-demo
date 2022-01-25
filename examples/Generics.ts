function identity<T>(value: T): T {
  return value;
}

interface User {
  id: string
  name: string
}

const num = identity(43)

const userVal = identity<User>({
  id: 'SOME-RANDOM-GENERATED-ID',
  name: 'Lucas',
  age: 23,
})

// const error = identity<string>(12) // vai dar erro, pois o valor não é string
