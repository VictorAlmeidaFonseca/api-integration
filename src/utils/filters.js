const dealsWon = (deal) => {
  if ( deal.data.status === 'won') {
    return true
  } else {
    return false
  }
}


function groupBy(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}


export { dealsWon , groupBy}