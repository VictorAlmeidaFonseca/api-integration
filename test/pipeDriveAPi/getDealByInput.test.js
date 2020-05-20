import  getDealByInput  from '../../src/pipeDriveApi/getDealByInput'
import chai from 'chai'

const expect = chai.expect

describe('Get data from pipedrive api', () => {
  it('it should return deals with success = true', async () => {
    const input = []
      input['staus'] = 'won'
    
    const deals = await getDealByInput(input)
    expect(deals.success).to.be.true
  })
})