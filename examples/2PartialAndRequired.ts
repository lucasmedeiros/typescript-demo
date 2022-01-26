interface MyFuncionParams {
  title: string
  onClick: () => void
  onFinish?: () => void
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

/**
 * 'Required' é o oposto de Partial, e permite tornar todos os atribitos de um tipo obrigatórios
 */

type MyThirdFunctionParams = Required<MyFuncionParams>

function myThirdFunction(params: MyThirdFunctionParams) {
  return params
}

//  myThirdFunction({
//    title: 'Um título',
//    onClick: function() { /* Do something! :) */}
//  }) // vai ocasionar erro

myThirdFunction({
  title: 'Um título',
  onClick: function () { /* Do something! :) */ },
  onFinish: function () { /* Do something! :) */ },
})
