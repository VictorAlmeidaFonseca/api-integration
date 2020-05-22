import { Configuration,
         RecentsController,
         DealsController } from 'pipedrive'

Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

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
