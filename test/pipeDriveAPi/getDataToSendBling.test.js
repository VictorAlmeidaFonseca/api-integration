import  getDataToSendBling from '../../src/services/pipeDriveApi/getProductsByRecentsDeal'
import chai from 'chai'

const expect = chai.expect

describe('# Test getDataToSendBling', () => {
  it('should return data to send a blig api', async ()=> {
    const result = await getDataToSendBling()
    expect(Object.keys(result[0]).length <= 7 ).to.be.true
  })
})