import { DealsController } from 'pipedrive'

const input = []

const getProductsByRecentDeals = async (deals) => {
  return Promise.all(deals.map(async (deal) => { 
    input['id'] = deal
    const getProducts = await DealsController.listProductsAttachedToADeal(input)
    
    return getProducts.data
}))
}

export default getProductsByRecentDeals