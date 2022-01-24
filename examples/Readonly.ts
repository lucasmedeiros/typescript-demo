interface User {
  name: string
  age: number
}

const user: User = {
  name: "Lucas",
  age: 23
}

user.name = "Adriano"
user.age = 110

/**
 * 'Readonly' te permite tornar todos os atributos de um tipo apenas possíveis de serem lidos, não alterados.
 * IMPORTANTE: Esse erro acontece apenas em tempo de compilação, em tempo de execução não vai quebrar.
 */

type ReadOnlyUser = Readonly<User>

const user2: ReadOnlyUser = {
  name: "Lucas",
  age: 23
}

// user2.name = "Naum podxi!" // vai ocasionar erro
// user2.age = -1 // vai ocasionar erro
