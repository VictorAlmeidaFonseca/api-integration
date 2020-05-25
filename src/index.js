import getDataToSendBling from './services/pipeDriveApi/getDataToSendBling'
import saveProductsToSendBling from './services/pipeDriveApi/saveProductsToSendBling'

const mainFunction = async () => {
  try {
  const getData = await getDataToSendBling()
  const saveData = await saveProductsToSendBling()
       
  } catch (error) {
    console.log(error) 
  }
}

mainFunction()
