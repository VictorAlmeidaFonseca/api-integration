import { getProductsByDeal, getDealByRecents } from './services/pipeDriveApi/getDataFromPipeDrive'
import { dealsWon } from './utils/filters'
import { fullTime } from './utils/utils'

// const dias = '96050a68f95be39d0bde2fcfc2dec7af22d51d0f'
// const parcela = 'a76029a413070c37c6246ee3159f89c0d25d292e'

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
// const testData = async () => {
//   ' 

//   const DealRecents =  await getDealByRecents(input)
//   const result =  DealRecents.data.map((el) => { return { nome : el.data.org_name }})
//   console.log(result)
//   return result
  
// }

// const getProducts = (id) => {
//   return
// }

const input = [] 
    input['id'] = 9

getProductsByDeal(input)
 .then(response => console.log(response))