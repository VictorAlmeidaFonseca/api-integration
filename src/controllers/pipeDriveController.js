import lib from 'pipedrive'

lib.Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'
const controller = lib.DealsController

const mockApi = async ( request, response ) => {
  try {
    const user = await lib.UsersController.getCurrentUserData()
    return response.json(user)

  } catch (err) {
    console.log(err)
  }
}

const getDealsByStatusWon = async (request, response) => {
  try {
    
    let input = [];
    input['status'] = 'won'
    
    const dealsByStatusWon = controller.getAllDeals(input)
    const result =  await dealsByStatusWon   
    console.log(result)
    return response.json(result)


  } catch (error) {
    console.log(error)
  }
} 

export {
  mockApi,
  getDealsByStatusWon
}
