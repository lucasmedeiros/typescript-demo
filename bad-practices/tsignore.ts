function writeNumberInString(num: number, digits: number): string {
  return num.toFixed(digits)
}

writeNumberInString(10, 3) // funciona

/* @ts-ignore */
writeNumberInString("asdsjds", "asdjasd") // não vai acusar erro quando estiver codando, mas quando rodar vai quebrar

/* @ts-ignore */
writeNumberInString(4, 8, 1, 23, 12) // não vai acusar erro quando estiver codando, mas quando rodar vai quebrar

// writeNumberInString("asdsjds", "zskiffsd")
// writeNumberInString(4, 8, 1, 23, 12)
