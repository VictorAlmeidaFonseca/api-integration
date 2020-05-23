import { DealsController } from 'pipedrive'

const input = []

const getProductsByRecentDeals = async (deals) => {
  return deals.map(async (deal) =>  { input['id'] = deal
    const getProducts = await DealsController.listProductsAttachedToADeal(input)
    return console.log(getProducts.data)
})
}

export default getProductsByRecentDeals