export function filterHouse(valueOfHouse) {
  return function(offer) {
    if (valueOfHouse === null) {
      return true
    }
    const building = offer.requirements.find(item => item.key === 'PROPERTY_TYPE');
    return valueOfHouse === building.value
  }
}