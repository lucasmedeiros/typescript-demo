function add(a: number, b: number): number {
  return a + b
}

add(10, 2) // funciona

/* @ts-ignore */
add("asdsjds", "zskiffsd") // não vai acusar erro quando estiver codando, mas quando rodar vai quebrar

// add("asdsjds", "zskiffsd")
