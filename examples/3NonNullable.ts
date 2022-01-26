/**
 * 'NonNullable' te permite construir um tipo sem valores null ou undefined.
 */

type Argument = string | undefined | null
type Argument2 = NonNullable<Argument>
type Argument3 = Required<Argument>

const arg1: Argument = "string"
// const arg2: Argument2 = undefined
// const arg3: Argument3 = undefined
