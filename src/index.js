import { getDealByRecents }  from './services/pipeDriveApi/getDataFromPipeDrive'
import { fullTime } from './utils/utils'


const input = []
input['sinceTimestamp'] = fullTime 
input['items'] = 'deal'  

getDealByRecents(input)
 .then(result => console.log(result))
 .catch(error => console.log(error))

console.log(fullTime)

// getDealByInput(input)
//   .then(result => console.log(result))

// getUser()
//  .then((result) => {
//    const { id, name } = result.data 
//    console.log( id, name) 
//  })
