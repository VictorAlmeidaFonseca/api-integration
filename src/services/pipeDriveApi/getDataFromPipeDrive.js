import { Configuration,
         RecentsController,
         DealsController } from 'pipedrive'

Configuration.apiToken = ''

const getDealByRecents = async (input) => {
  const searchDeals = RecentsController.getRecents(input)
  const result = await searchDeals
    return result
}

const getProductsByDeal  = async (input) => {
  const searchDeals = DealsController.listProductsAttachedToADeal(input)
  const result = await searchDeals
    return result
}

export {
  getDealByRecents,
  getProductsByDeal
}
