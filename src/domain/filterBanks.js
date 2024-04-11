export  function filterBanks(valuesOfBanks) {
  return function(offer) {
    return valuesOfBanks.includes(offer.bankId)
  }
}