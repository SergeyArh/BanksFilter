export function compose(...args) {
  return function (offer) {
    return args.every(item => item(offer))
  }
}