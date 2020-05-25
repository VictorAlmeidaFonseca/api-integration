const dealsWon = (deal) => {
  if ( deal.data.status === 'won') {
    return true
  } else {
    return false
  }
}

const groupBy = (products, props) => {
  return products.reduce((acc, obj) => {
    let key = obj[props];
      if (!acc[key]) {
        acc[key] = [];
    }
      acc[key].push(obj);
        return acc;
  }, {});
}

export { dealsWon , groupBy}
