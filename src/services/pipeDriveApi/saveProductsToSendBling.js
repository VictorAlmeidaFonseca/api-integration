import getDataToSendBling from './getDataToSendBling'
import path from 'path'
import fs from 'fs'

const filePath = path.join(__dirname, '../data/pedidos.xml')

 const writeXml = async () => { 
  try {
    const data = await getDataToSendBling()
    const toXml = data.map((product) => {

    const xml =  `<?xml version="1.0" encoding="UTF-8"?> 
                  <pedido> 
                  <cliente>
                     <nome> ${product.nome}</nome>
                  </cliente> 
                  <volume> 
                     <servico>${product.servico}</servico>
                  </volume> 
                   <item> 
                      <descricao>${product.descricao}</descricao>
                      <qtde>${product.qtde}</qtde> 
                      <vlr_unit>${product.vlr}</vlr_unit> 
                    </item> 
                  <parcelas> 
                  <parcela> 
                      <vlr>${product.vlr}</vlr> 
                   </parcela> 
                  </parcelas> 
                  </pedido> `
        
        return xml
      })
      return toXml
  } catch (err) {
    console.log(err)
  }  
}

const saveXml = async () => {

  const xmlFile =  await writeXml()
   
  return fs.writeFile(filePath, xmlFile, (err, result) => {
        if (err) {
         console.log("We could not save file")
        } else {
         console.log("Xml file successfully save.")
       }
     })
  } 

  export default saveXml


