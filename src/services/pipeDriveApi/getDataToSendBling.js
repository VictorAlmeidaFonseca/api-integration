import getRecentDealsWithStatusWon from './getRecentsDealsWithStatusWon' 
import getProductsByRecentsDeals from './getProductsByRecentsDeal'
import { groupBy } from '../../utils/filters'


const getIdFromRecentsDeals = async () =>{
  const deals = await getRecentDealsWithStatusWon()
    return deals.map(deal => deal.id)
}

const selectFieldsFromRecentDeals = async () => {
  const deals = await getRecentDealsWithStatusWon()
  if (deals && deals.length > 0) {  
    return deals.map(
      (deal) => {
        return {
          deal_id: deal.id,
          nome: deal.org_name,
          servico: deal.title,
          vlr: Number(deal['3f3c9723694df94db54d4f77f9ffba2d0ae962da']) // Instalment value
        }
      })
     } else {
      console.log('There are no data to fetch')
    }
}

const selectFiledsFromProducts = async () => {
  try {
    const dealsId = await getIdFromRecentsDeals()
    const products = await getProductsByRecentsDeals(dealsId)
    const fieldsOfProducts = products.flat()
    return fieldsOfProducts.map(
      (product) => {
        return {
          deal_id: product.deal_id,
          vlr_unit: product.item_price,
          descricao: product.name,
          qtde: product.quantity
        }
      })
   } catch (erro) {
    console.log(erro)
  }
}

const wrapperProductsAndDeals = async () =>{
  const dealsFields = await selectFieldsFromRecentDeals()
  const productsFields = await selectFiledsFromProducts()
 
  const join = [...dealsFields, ...productsFields ]
 
  const select = groupBy(join, 'deal_id')
  return select
}



async function NormalizeArrayFromProducts() {
  const products = await wrapperProductsAndDeals()
  
  const copy = Object.assign({}, products)
  const tranformToArray = Object.entries(copy)
  const removeNull = tranformToArray.filter((index) => index[1])
  const removeIndex = removeNull.map((item) => item.shift())
  const newArray = removeNull.flat()
  
  const filter = newArray.map((item) => Object.assign(item[0], item[1]))
    return filter
}

export default NormalizeArrayFromProducts
