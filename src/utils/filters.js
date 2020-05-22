const dealsWon = (deal) => {
  if ( deal.status === 'won') {
    return true
  } else {
    return false
  }
}

export {
  dealsWon
}