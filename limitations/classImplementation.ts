interface Service<T> {
  insert(data: T, onFinish: (data: T) => void): Promise<T>
}

class MyService implements Service<string> {
  private async writeIntoDatabase(data: string): Promise<string> {
    return data
  }

  public async insert(data: string, onFinish: (data: string) => void) {
    const item = await this.writeIntoDatabase(data)
    onFinish(item)
    return item
  }
}

const MyServiceObj = new MyService()

MyServiceObj.insert("Novo valor", function (data) {
  console.log(`O valor ${data} foi adicionado`)
})
