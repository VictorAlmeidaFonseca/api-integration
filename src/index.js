import { getProductsByDeal, getDealByRecents } from './services/pipeDriveApi/getDataFromPipeDrive'
import { dealsWon } from './utils/filters'
import { fullTime } from './utils/utils'

const getIdFromRecentsDeals = async () => {
  const input = []
  input['sinceTimestamp'] = fullTime 
  input['items'] = 'deal'

  const DealsRecents = await getDealByRecents(input)
  const result = DealsRecents.data.map((deal) => {
    return { 
      id: deal.data.id,
      fornecedor: deal.data.org_name,
      dias_pagamento: 0,
      valor_parcela: 0,
     }
  })

  console.log(result)
  
}

getIdFromRecentsDeals()

const input = [] 
    input['id'] = 9

getProductsByDeal(input)
 .then(response => console.log(response))
