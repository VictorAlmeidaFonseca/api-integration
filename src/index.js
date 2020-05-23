import getRecentDealsWithStatusWon from './services/pipeDriveApi/getRecentsDeals' 
import getProductsByRecentsDeals from './services/pipeDriveApi/getProductsByRecentsDeal'


const getIdFromRecentsDeals = async () =>{
  const deals = await getRecentDealsWithStatusWon()
   return deals.map(deal => deal.id)
}

const selectFiledsFromProductsByRecentsDealsId = async () => {
  try {
    const dealsId = await getIdFromRecentsDeals()
    const products = await getProductsByRecentsDeals(dealsId)
    const fieldsOfProducts = products.flat()
    return fieldsOfProducts.map(
      (product) => {
        return {
          item_price: product.item_price,
          name: product.name,
          quantity: product.quantity
        }
      })
   } catch (erro) {
    console.log(erro)
  }
}

async function test() {
const x =  await selectFiledsFromProductsByRecentsDealsId()
console.log(x)
}

test()

// const getProductsByRecentsDealsId = async () => {
//   try {
//     const dealsId = await getIdFromRecentDeals()
//     const products = await getProductsByRecentsDeals(dealsId)
//     return products

//   } catch (erro) {
//     console.log(erro)
//   }
// }

// return console.log ({
//   item_price: getProducts.data.item_price,
//   name: getProducts.data.name,
//   quantity: getProducts.data.quantity
// })