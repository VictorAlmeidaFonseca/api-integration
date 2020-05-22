import { getDealByRecents, getProductsByDeal} from './filterDataFromControllers'
import { dealsWon } from '../../utils/filters'
import { fullTime } from '../../utils/utils'


const filteredRecentsDeals = async () => {
   const input = []
   input['sinceTimestamp'] = fullTime 
   input['items'] = 'deal'
 
   const dealsRecents = await getDealByRecents(input)
   return dealsRecents.data
          .filter(dealsWon)
          .map((deal) => {
     return { 
       id: deal.data.id,
       fornecedor: deal.data.org_name,
       dias_pagamento: 0,
       valor_parcela: 0,
      }
   })
 }
 
const filteredProducts = async () => {
  const input = [] 
        input['id'] = 9

  const dealsProducts = await getProductsByDeal(input)
  return dealsProducts.data.map(product => {
    return {
      deal_id: product.id,
      item_price: product.item_price,
      name: product.name,
      quantity: product.quantity
    }
  })
}

export {
  filteredRecentsDeals,
  filteredProducts
}
 
