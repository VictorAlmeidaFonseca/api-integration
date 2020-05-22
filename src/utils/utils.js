const currentDataTime = new Date()
const day = currentDataTime.getDate()  
const month = currentDataTime.getUTCDay()
const year = currentDataTime.getUTCFullYear()
const hour = currentDataTime.getHours()

const fullTime = `${year}-0${month}-${day} ${hour}:30:00`


export {
  fullTime
}
