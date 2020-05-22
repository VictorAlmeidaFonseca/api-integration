const dealsWon = (deal) => {
  if ( deal.data.status === 'won') {
    return true
  } else {
    return false
  }
}

export {
  dealsWon
}