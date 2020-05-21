import chai from 'chai'
import getDealByInput from '../../src/services/pipeDriveApi/getDealByInput'

const expect = chai.expect

describe('#Get data from pipedrive api', () => {
  it('it should return deals with success = true', async () => {
    const input = []
          input['status'] = 'won'
    
    const deals = await getDealByInput(input)
    expect(deals.success).to.be.true
  }).timeout(3000)
})