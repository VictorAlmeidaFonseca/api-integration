import getRecentDealsWithStatusWon from './services/pipeDriveApi/getRecentsDeals' 
import getProductsByRecentsDeals from './services/pipeDriveApi/getProductsByRecentsDeal'

const getIdFromRecentsDeals = async () =>{
  const deals = await getRecentDealsWithStatusWon()
    return deals.map(deal => deal.id)
}

const selectFieldsFromRecentDeals = async () => {
  const deals = await getRecentDealsWithStatusWon()
    return deals.map(
      (deal) => {
        return {
          deal_id: deal.id,
          org_name: deal.org_name,
          nrodias: deal['a395ebedfb4cacccda339fe4c09680d73cbbaa94'],
          valor: deal['2416f27289737fa90dc105c777b1371226b17b53'],
          idformapagamento: deal['3f3c9723694df94db54d4f77f9ffba2d0ae962da']
        }
      })
}


const selectFiledsFromProductsByRecentsDealsId = async () => {
  try {
    const dealsId = await getIdFromRecentsDeals()
    const products = await getProductsByRecentsDeals(dealsId)
    const deals = await getRecentDealsWithStatusWon()
    const fieldsOfProducts = products.flat()
   
    return fieldsOfProducts.map(
      (product) => {
     
        const allDeals =  deals.map(
            (deal) => {
           return {
              deal_id: deal.id,
              org_name: deal.org_name,
              nrodias: deal['a395ebedfb4cacccda339fe4c09680d73cbbaa94'],
              valor: deal['2416f27289737fa90dc105c777b1371226b17b53'],
              idformapagamento: deal['3f3c9723694df94db54d4f77f9ffba2d0ae962da']
             }
      })
        return {
          allDeals,
          deal_id: product.deal_id,
          item_price: product.item_price,
          name: product.name,
          quantity: product.quantity
        }
      })

   } catch (erro) {
    console.log(erro)
  }
}

const wrapperProducutsAndDeals = async () =>{
  // const dealsFields = await selectFieldsFromRecentDeals()
  const productsFields = await selectFiledsFromProductsByRecentsDealsId()
  // const join = [dealsFields, productsFields ]
  
  console.log(productsFields.flat())

}

wrapperProducutsAndDeals()

