export const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max - min)) + min
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return random
  }
}