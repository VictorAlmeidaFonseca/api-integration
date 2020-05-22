import chai from 'chai'
import { fullTime } from '../../src/utils/utils'
import  { getDealByRecents } from '../../src/services/pipeDriveApi/getDataFromPipeDrive'

const expect = chai.expect

describe('#Get data from pipedrive api', () => {
  it('should return deals filtred by data with success = true', async () => {
    const input = []
      input['sinceTimestamp'] = fullTime 
      input['items'] = 'deal'  
      
    const deals = await getDealByRecents(input) 
    expect(deals.success).to.be.true
  }).timeout(5000)
  
  // it(`should return User's information`, async () => {
  //   const user = await getUser()
  //   expect(user.data.id).to.equal(11531473)
  // }).timeout(5000)

})

