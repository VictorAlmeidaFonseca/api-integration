import getRecentsDealsWithStatusWon from '../../src/services/pipeDriveApi/getRecentsDealsWithStatusWon'
import chai from 'chai'

const expect = chai.expect

describe('# Test getRecentsDealsWithStatusWon', ()=> {
  it('should return only recent deals with status = won', async ()=> {
    const statusRecent = await getRecentsDealsWithStatusWon()
    const result = statusRecent.map(deal => deal.status)
    expect(result.every(ele => ele === 'won')).to.be.true
  })
})