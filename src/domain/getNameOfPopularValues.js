export function getNameOfPopularValues(number) {
  const str = number.toString();
  if (str.endsWith('1') && !str.endsWith('11')) {
    return 'год'
  }
  if ((str.endsWith('2') || str.endsWith('3') || str.endsWith('4')) && !str.endsWith('1', 1)) {
    return 'года'
  }
  return 'лет'
}