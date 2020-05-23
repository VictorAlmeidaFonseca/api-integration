
import { fullTime } from '../../utils/fullTime'
import { dealsWon } from '../../utils/filters'
import { Configuration,
         RecentsController } from 'pipedrive'

Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

const inputs = []

inputs['items'] = 'deal'
inputs['sinceTimestamp'] = fullTime

const RecentsDeals = RecentsController.getRecents(inputs)

const getIdFromRecentDeals = async () => {
  const deals = await RecentsDeals 
  if ( deals.data === null ) {
    return "There are no recent data to fetch."
  } else {
    return deals.data
             .filter(dealsWon)
             .map(deal => deal.data.id)
  }
}

export default getIdFromRecentDeals 