import { getDealByRecents }  from './services/pipeDriveApi/getDataFromPipeDrive'
import { fullTime } from './utils/utils'


const input = []
input['sinceTimestamp'] = '2020-05-21 19:30:00' 
input['items'] = 'deal' 

const dealsWon = (deal) => {
  if ( deal.status === 'won') {
    return true
  } else {
    return false
  }
}
  
  

getDealByRecents(input)
.then((response) => {
  const result = response.data
                  .map(deal => deal.data)
                  .filter(dealsWon)
  
  console.log(result)
})




console.log(fullTime)

// getDealByInput(input)
//   .then(result => console.log(result))
