import lib from 'pipedrive'

lib.Configuration.apiToken = 'c2c46b8af3ee0e47f77462d49e8786040da99cad'

const getDealByInput = async (input) => {
  const searchDeals = lib.DealsController.getAllDeals(input)
  const result = await searchDeals
  return result
}

export default getDealByInput
