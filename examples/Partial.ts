interface MyFuncionParams {
  title: string
  onClick: () => void
}

function myFunction(params: MyFuncionParams) {
  return params
}

// myFunction({}) // vai ocasionar erro

myFunction({
  title: "Um título",
  onClick: function () { /* Do something! :) */ }
})

/**
 * 'Partial' te permite tornar todos os atributos de um tipo opcionais (ou seja, também podem ser undefined)
 */

type MySecondFunctionParams = Partial<MyFuncionParams>

function mySecondFunction(params: MySecondFunctionParams) {
  return params
}

mySecondFunction({}) // funciona perfeitamente
