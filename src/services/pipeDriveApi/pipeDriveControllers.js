import { fullTime } from '../../utils/fullTime'
import { Configuration,
         RecentsController,
         DealsController } from 'pipedrive'

Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

const inputs = {
  deals: [],
  products: [],
}

inputs.deals['items'] = 'deal'
inputs.deals['sinceTimestamp'] = fullTime
inputs.products['id'] = 12

const RecentsDeals = RecentsController.getRecents(inputs.deals)
const Products = DealsController.listProductsAttachedToADeal(inputs.products)

export { Products, RecentsDeals, inputs } 
