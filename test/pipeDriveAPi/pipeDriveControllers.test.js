import { RecentsDeals, Products } from '../../src/services/pipeDriveApi/pipeDriveControllers'
import chai from 'chai'

const expect =  chai.expect

describe('# Teste pipeDrive Controllers', () =>{
  it('should connect on deals controller', async () => {
    const deals = await RecentsDeals
     expect(deals.success).to.be.true
  }).timeout(5000)

  it('should connect on products controller', async () => {
    const products = await Products
     expect(products.success).to.be.true
  }).timeout(5000)
})
