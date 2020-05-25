import  getProductsByRecentDeals from '../../src/services/pipeDriveApi/getProductsByRecentsDeal'
import chai from 'chai'

const expect = chai.expect
const mockData = [10,11,12,13]

describe('# Test getProductsByRecentDeals', ()=> {
  it('should return only recent products attached to a deals', async ()=> {
    const products = await getProductsByRecentDeals(mockData)
    const result = products.map(product => product.deal_id)
    expect(result.length > 0).to.be.true
  })
})