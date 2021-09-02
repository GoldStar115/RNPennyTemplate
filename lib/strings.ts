export const getInitials = (name: string) => {
  const words = (name || '')
    .trim()
    .toUpperCase()
    .split(' ')
    .map((word) => word[0])
  return `${words.shift() || ''}${words.pop() || ''}`
}

export const stringToNumber = (input: string, maxLength?: number) => {
  input = input || ''
  if (input.length === 0) return 0
  maxLength = maxLength || 6
  const joinedNumbers = input
    .substr(0, maxLength)
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('')
  console.log({ joinedNumbers })
  return parseInt(joinedNumbers)
}
