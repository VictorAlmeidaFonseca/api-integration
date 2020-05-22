import chai from 'chai'
import { fullTime } from '../../src/utils/utils'
import { dealsWon } from '../../src/utils/filters'
import { getDealByRecents } from '../../src/services/pipeDriveApi/filterDataFromControllers'

const expect = chai.expect

const input = []
input['sinceTimestamp'] = fullTime 
input['items'] = 'deal' 

describe('#Get data from pipedrive api', () => {
  it('should return deals filtred by data with success = true', async () => {
    const deals = await getDealByRecents(input) 
    expect(deals.success).to.be.true
  }).timeout(5000)
  
  
  it(`should return deals with status = 'won' `, async () => {
    const deals = await getDealByRecents(input)
    const result = deals.data
                    .filter(dealsWon)
                    .map((deal) => deal.data.status)
     expect(result[0]).to.equal('won')
  }).timeout(5000)

})

