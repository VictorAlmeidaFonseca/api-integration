<<<<<<< HEAD
import { getProductsByDeal, getDealByRecents } from './services/pipeDriveApi/getDataFromPipeDrive'
import { dealsWon } from './utils/filters'
import { fullTime } from './utils/utils'

const getIdFromRecentsDeals = async () => {
  const input = []
  input['sinceTimestamp'] = fullTime 
  input['items'] = 'deal'

  const DealsRecents = await getDealByRecents(input)
  return DealsRecents.data.map((deal) => {
    return { 
      id: deal.data.id,
      fornecedor: deal.data.org_name,
      dias_pagamento: 0,
      valor_parcela: 0,
     }
  })  
}

getIdFromRecentsDeals()

const input = [] 
    input['id'] = 9

getProductsByDeal(input)
 .then(response => console.log(response))
=======
import getDataToSendBling from './services/pipeDriveApi/getDataToSendBling'
import saveProductsToSendBling from './services/pipeDriveApi/saveProductsToSendBling'

const mainFunction = async () => {
  try {
  const getData = await getDataToSendBling()
  const saveData = await saveProductsToSendBling()
       
  } catch (error) {
    console.log(error) 
  }
}

mainFunction()
>>>>>>> development
