export const getLastFullStopAfterIndex = (str: string) => {
  const maxExcerpt = str.substring(0, 280)
  const lastIndex = maxExcerpt.lastIndexOf('.')
  return str.substring(0, lastIndex) + '...'
}
