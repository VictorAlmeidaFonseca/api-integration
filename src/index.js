import { RecentsDeals, Products, inputs } from './services/pipeDriveApi/pipeDriveControllers'
import { dealsWon } from './utils/filters'

const getIdFromRecentDeals = async () => {
  const deals = await RecentsDeals 
  if ( deals.data === null ) {
    return "There are no data to fetch."
  } else {
    return deals.data
             .filter(dealsWon)
             .map(deal => deal.data.id)
  }
}

const getProductsFromRecentDealsId = async () => {
  const recentDeals = await getIdFromRecentDeals()
  const products = await Products
  return products.data
            .map((products) => {
              return {
              deal_id : products.deal_id, 
              item_price: products.item_price
            }})
            .filter(product => (recentDeals).indexOf(product.deal_id) !== -1)
}



async function test(){
  const dealsId = await getIdFromRecentDeals()
  const products = await getProductsFromRecentDealsId()
  const x = await RecentsDeals
  console.log(x)
  console.log(dealsId)
  console.log(products)


} 

test()

