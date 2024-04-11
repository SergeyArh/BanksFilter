export function filterCredit(valueCredit) {
  return function(offer) {
    if (valueCredit === null) {
      return true
    }
    return (valueCredit >= (offer.minTerm / 12) && valueCredit <= (offer.maxTerm / 12))
  }
}