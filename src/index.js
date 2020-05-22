import { getProductsByDeal, 
         getDealByRecents } from './services/pipeDriveApi/filterDataFromControllers'
import { filteredRecentsDeals, 
        filteredProducts } from './services/pipeDriveApi/getDataByFilters'

const teste = async () => { 
  const deals =  await filteredRecentsDeals()
  const products = await filteredProducts()

  console.log(deals)
  console.log(products)

}

teste()