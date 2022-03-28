// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import allData from './data'

class Database {
  constructor() {}

  async getAll(): Promise<any[]> {
    const asArray = Object.values(allData)
    await randomDelay()
    return asArray
  }

  async getById(id: string): Promise<any | null> {
    if (!Object.prototype.hasOwnProperty.call(allData, id)) {
      return null
    }

    const entry = allData[id]
    
    await randomDelay()
    return entry
  }
  
  async getCompareProducts(quantity): Promise<any> {
    let randomsProducts = [];
    const all = await this.getAll()
    
    for(let i=1 ; i<= quantity ; i++){

      const randomIndex = Math.floor(Math.random() * all.length)
      const randomProduct = all[randomIndex]
      
      randomsProducts.push(randomProduct)
    }
   
    // const randomIndex = Math.floor(Math.random() * all.length)
    // const randomProduct = all[randomIndex]
   // await randomDelay()
     return randomsProducts
    
  }
}


// Let's also add a delay to make it a bit closer to reality
const randomDelay = () =>
  new Promise((resolve) => {
    const max = 350
    const min = 100
    const delay = Math.floor(Math.random() * (max - min + 1)) + min

    setTimeout(resolve, delay)
  })




export default Database