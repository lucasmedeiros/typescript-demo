function getItems(onFinish: () => any) {
  const value = onFinish()

  value.doSomething()
}

function onFinish() {
  console.log("Função callback foi chamada")
}

getItems(onFinish)

/**
 * `getItems` recebe um callback, pega seu valor e tenta utilizá-lo a partir da chamada da função `doSomething`.
 * Não vai acusar erro quando estiver codando, porém quando for rodar vai quebrar
 */
