const currentDataTime = new Date()
const getday = currentDataTime.getDate().toString()
const getmonth = currentDataTime.getDay().toString()  
const day = getday.length == 1 ? `0${getday}` : getday
const month = getmonth.length == 1 ? `0${getmonth -1}` : getmonth
const year = currentDataTime.getFullYear()
const hour = currentDataTime.getHours()

const fullTime = `${year}-${month}-${day} ${hour}:00:00`


export {
  fullTime
}
