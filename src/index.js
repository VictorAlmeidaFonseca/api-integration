import getIdFromRecentDeals from './services/pipeDriveApi/getRecentsDeals' 
import getProductsByRecentsDeals from './services/pipeDriveApi/getProductsByRecentsDeal'

const getProductsByRecentsDealsId = async () => {
  try {
    const dealsId = await getIdFromRecentDeals()
    const products = await getProductsByRecentsDeals(dealsId)
    return products

  } catch (erro) {
    console.log(erro)
  }
}

async function test() {
const x =  await getProductsByRecentsDealsId()
console.log(x)
}

test()
