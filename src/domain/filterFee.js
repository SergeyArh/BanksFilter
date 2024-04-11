export function filterFee(valueFee) {
  return function(offer) {
    if (valueFee === null) {
      return true
    }
    return ((valueFee >= offer.minInitialPayment * 100) && (valueFee <= offer.maxInitialPayment * 100))
  }
}