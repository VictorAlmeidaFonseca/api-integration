import { RecentsController, DealsController, Configuration } from 'pipedrive'
import chai from 'chai'

Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

const expect =  chai.expect

const mockData = {
  recentes : [],
  deals: [],
}

mockData.recentes['items'] = 'deal'
mockData.recentes['sinceTimestamp'] = '2020-05-22 09:00:00'
mockData.deals['id'] = 3

describe('# Teste pipeDrive Controllers', () =>{
  it('should connect on Recentdeals controller', async () => {
    const recents = await RecentsController.getRecents(mockData.recentes)
     expect(recents.success).to.be.true
  }).timeout(5000)

  it('should connect on DealsController controller', async () => {
    const deals = await DealsController.listProductsAttachedToADeal(mockData.deals)
     expect(deals.success).to.be.true
  }).timeout(5000)
})


const inputs = []



