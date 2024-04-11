export function filterEstate(valueOfEstate) {
  return function(offer) {
    if (valueOfEstate === null) {
      return true
    }
    if (valueOfEstate === 'ALL') {
      return true
    }
    return valueOfEstate === offer.product
  }
}